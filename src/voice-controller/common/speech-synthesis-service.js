/*
 Copyright 2016
 Pilyugin Alexey

 This file is part of Voice ART.

 Voice ART is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Voice ART is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';
import merge from 'merge';
import EventEmitter from 'events';

var isMobile = /android|iphone|ipod|ipad|windows phone/i.test(navigator.userAgent);


const DEFAULT_SETTINGS = {
    lang: 'en-US',
    rate: 0.8, // 0.1 to 10
    browserSpecific: {
        volume: 1, // 0 to 1
        voice: 2,
        voiceURI: 'native'
    }
};

class SpeechSynthesisService {

    static get EVENTS() {
        return {
            SKIP: 'skip',
            SPEAK: 'speak',
            STOP: 'stop'
        };
    }

    static get PART_TYPES() {
        return {
            SPEECH: 'speech',
            PAUSE: 'pause',
            SOUND: 'sound'
        };
    }

    static get emitter() {
        if (!this._emitter) {
            this._emitter = new EventEmitter();
        }
        return this._emitter;
    }

    /**
     *
     * @returns {function}
     */
    static get emit() {
        var thisClass = this;
        return thisClass.emitter.emit;
    }

    /**
     *
     * @returns {function}
     */
    static get on() {
        var thisClass = this;
        return thisClass.emitter.on;
    }

    static init() {
        if (!this.isBrowserSupported())
            return;
        if('addEventListener' in window.speechSynthesis)
            window.speechSynthesis.addEventListener('voiceschanged', function() {
                let voices = window.speechSynthesis.getVoices();
                if(voices.length > 0) {
                    let voiceNumber = voices.indexOf(voices.filter(voice => (voice.lang === 'en_US')||(voice.lang === 'en-US'))[0]);
                    if(voiceNumber > -1) {
                        DEFAULT_SETTINGS.browserSpecific.voice = voiceNumber;
                    } else {
                        DEFAULT_SETTINGS.browserSpecific.voice = voices.indexOf(voices.filter(voice => voice.lang.indexOf('en') > -1)[0]);
                    }
                }
            });

        // array to store utterance for workaround Chrome bug
        this.utterances = [];

        this._loadVoices = new Promise(resolve => {
            function resolveVoicesLoading() {
                window.speechSynthesis.onvoiceschanged = null;
                let voices = window.speechSynthesis.getVoices();
                resolve(voices);
            }

            window.speechSynthesis.onvoiceschanged = resolveVoicesLoading;
            if (window.speechSynthesis.getVoices().length) {
                resolveVoicesLoading();
            }
        });
    }

    //todo: remove this functionality when bug will be fixed in Chrome (See chromium bug tracker: https://code.google.com/p/chromium/issues/detail?id=509488)
    /**
     * Store utterance to avoid end event Chrome bug.
     * @param {SpeechSynthesisUtterance} utterance
     */
    static storeUtterance(utterance) {
        if (!this.utterances)
            this.utterances = [];
        this.utterances.push(utterance);
    }

    /**
     * Remove all utterances before current
     * @param {SpeechSynthesisUtterance} utterance
     */
    static removeUtterance(utterance) {
        if (!this.utterances)
            return;
        // if is undefined -> remove all
        if (typeof utterance === 'undefined' && this.utterances.length) {
            utterance = this.utterances[this.utterances.length - 1];
        }
        for (var i = 0; i < this.utterances.length; i++) {
            if (utterance == this.utterances[i]) {
                this.utterances.splice(0, i + 1);
            }
        }
    }

    /**
     * Returns promise which pass voices list as the fulfillment value.
     * This promise defines in a {@link SpeechSynthesisService#init|init()} method.
     * @returns {Promise}
     */
    static loadVoices() {
        return this._loadVoices;
    }

    /**
     * Returns true if Web Speech API is Supported
     * @returns {boolean}
     */
    static isBrowserSupported() {
        return 'speechSynthesis' in window;
    }

    /**
     * Synthesizes speech and sounds. Returns promise which resolves when the last part has completed.
     * @param {string} text
     * @param {object} [settings]
     * @returns {Promise}
     */
    static synthesize(text, settings) {
        var thisClass = this;
        settings = merge(true, {}, DEFAULT_SETTINGS, settings);
        var useBrowser = this.isBrowserSupported();

        this.isPlaying = true;

        thisClass.emit(thisClass.EVENTS.SPEAK, text);
        if (useBrowser) {
            return this.synthesizeWithBrowser(text, settings);
        }
        else {
            return this.synthesizeWithServer(text, settings);
        }
    }

    static stop() {
        var thisClass = this;
        //todo: check browser or server speaking
        window.speechSynthesis.cancel();
        thisClass.isPlaying = false;
        thisClass.emit(thisClass.EVENTS.STOP);
    }

    static skip() {
        var thisClass = this;
        //todo: check browser or server speaking
        thisClass.isSkipped = true;
        thisClass.emit(thisClass.EVENTS.SKIP);
        thisClass.stop();
    }

    static synthesizeWithBrowser(text, settings) {
        var thisClass = this;
        // todo: remove this functionality when bug will be fixed in Chrome (See chromium bug tracker: https://code.google.com/p/chromium/issues/detail?id=335907 and https://code.google.com/p/chromium/issues/detail?id=369472)
        // split text to fix long speech bug in Chrome
        var parts = this.processSpeechText(text);
        var voices;
        var lastPromise = this.loadVoices().then((v) => {
            voices = v;
        });
        var promisesChain = [lastPromise];

        for (var i = 0; i < parts.length; i++) {
            let newChainElement = generateChainFunction(parts[i]);
            addToChain(newChainElement);
        }

        addToChain(() => {
            this.isPlaying = false;
            this.isSkipped = false;
        });

        return lastPromise;

        /**
         *
         * @param {Array.<string>} texts
         * @returns {Function}
         */
        function generateSpeechChainFunction(texts) {
            return function () {
                var remaningCount = texts.length;
                return new Promise((resolve, reject) => {
                    if (thisClass.isSkipped) {
                        resolve();
                        return;
                    }
                    window.speechSynthesis.cancel();

                    for (var i = 0; i < texts.length; i++) {
                        let utterance = new SpeechSynthesisUtterance();
                        utterance.text = texts[i];
                        utterance.voice = voices[settings.browserSpecific.voice];
                        /*let enVoices = voices.filter(voice => voice.lang.indexOf('en') > -1);
                        if(enVoices.length > 0){
                            let enUSVoices = enVoices.filter(voice => voice.lang === 'en-US');
                            if(enUSVoices.length > 0){
                                alert(enUSVoices[0].lang);
                                utterance.voice = enUSVoices[0];
                            } else {
                                alert(enVoices[0].lang);
                                utterance.voice = enVoices[0];
                            }
                        } else {
                            alert(`Unfortunately there is not available english voices in your browser. Available langs: ${voices.map(voice => voice.lang)}`);
                        }*/

                        utterance.lang = settings.lang;
                        utterance.rate = settings.rate;

                        utterance.volume = settings.browserSpecific.volume;
                        utterance.voiceURI = settings.browserSpecific.voiceURI;
                        utterance.addEventListener('end', (e) => {
                            remaningCount--;

                            // remove all utterance before current from array to clear memory
                            thisClass.removeUtterance(e.utterance);
                            if (thisClass.isPlaying && remaningCount <= 0
                                || thisClass.isSkipped) {
                                resolve();
                            }
                            else if (!thisClass.isPlaying) {
                                // when force stopped before end
                                reject(new Error('Speaking was stoped.'));
                            }

                        });
                        //msg.pitch = 0; //0 to 2

                        //todo: Utterance End event is not working without storing globally. See chromium bug tracker: https://code.google.com/p/chromium/issues/detail?id=509488
                        //todo: make test for this and normal behavior to know when it will be fixed in Chrome
                        thisClass.storeUtterance(utterance);
                        // push utterance to speech stack
                        window.speechSynthesis.speak(utterance);
                    }

                });
            }
        }

        /**
         *
         * @param {number|string} time - time of pause in seconds
         * @returns {Function}
         */
        function generatePauseChainFunction(time) {
            time = Math.round(parseFloat(time) * 1000);
            return function () {
                return new Promise((resolve, reject) => {
                    if (thisClass.isSkipped || isNaN(time)) {
                        resolve();
                        return;
                    }
                    thisClass.on(thisClass.EVENTS.STOP, () => {
                        if (thisClass.isSkipped) {
                            resolve();
                        }
                        else {
                            // when force stopped
                            reject(new Error('Speaking was stoped.'));
                        }
                    });

                    setTimeout(() => {
                        resolve();
                    }, time);
                });
            }
        }

        /**
         *
         * @param {string} soundName - sound file name
         * @returns {Function}
         */
        function generateSoundChainFunction(soundName) {
            return function () {
                return new Promise((resolve, reject) => {
                    if (thisClass.isSkipped || !soundName || isMobile) {
                        resolve();
                        return;
                    }
                    try {
                        var soundSrc = require(`./../assets/sounds/${soundName}.mp3`);
                        var sound = new Audio(soundSrc);
                        thisClass.on(thisClass.EVENTS.STOP, () => {
                            sound.pause();
                            if (thisClass.isSkipped) {
                                resolve();
                            }
                            else {
                                // when force stopped
                                reject(new Error('Speaking was stoped.'));
                            }
                        });
                        sound.addEventListener('ended', () => {
                            resolve();
                        });
                        sound.play();
                    }
                        //can not find file
                    catch (e) {
                        if (console.warn)
                            console.warn(`Warning: Can not find sound: "${soundName}.mp3" or some other Error has occurred. It will not reproduced.`);
                        resolve();
                    }
                });
            }
        }

        /**
         *
         * @param {SynthesisPart} part
         * @returns {Function}
         */

        function generateChainFunction(part) {
            var chainFunc;
            switch (part.type) {
                case thisClass.PART_TYPES.SPEECH:
                    chainFunc = generateSpeechChainFunction(part.value);
                    break;
                case thisClass.PART_TYPES.PAUSE:
                    chainFunc = generatePauseChainFunction(part.value);
                    break;
                case thisClass.PART_TYPES.SOUND:
                    chainFunc = generateSoundChainFunction(part.value);
                    break;
                default:
                    if (console.warn)
                        console.warn(`Warning: Unknown speech part type: "${part.type}". It will not reproduced.`);
                    break;
            }
            return chainFunc;
        }

        function addToChain(element) {
            if (!element)
                return;
            lastPromise = lastPromise.then(element);
            promisesChain.push(lastPromise);
        }
    }

    static synthesizeWithServer(text, settings) {
        //todo:
        console.log('Server Synthesizer have not realized yet...');
    }

    /**
     * @typedef {Object} SynthesisPart
     * @property {string} type - can be 'speech' or 'sound' or 'pause'
     * @property {string|array.<string>} value - can be 'speech' or 'sound' or 'pause'
     */

    /**
     * Replaces template expressions (example: `${pause 3}`) with objects and
     * splits text to smaller texts no longer than maxLength argument.
     * @param text
     * @param maxLength
     * @param splitCharacters
     * @returns {Array.<SynthesisPart>}
     */
    static processSpeechText(text, maxLength, splitCharacters) {
        var thisClass = this;
        var injectionRegExp = /(\$\{[\w\. ]*\})/gi;
        var processed = text.split(injectionRegExp);
        processed = processed.map(function (a) {
            a = a.trim();
            if (injectionRegExp.test(a)) {
                a = a.substring(2, a.length - 1);
                a = a.split(' ');
                a = {
                    type: a[0],
                    value: a[1]
                }
            }
            return a;
        });

        for (var i = processed.length - 1; i >= 0; i--) {
            let a = processed[i];
            if (typeof a === 'string') {
                let splittedTexts = this.splitSpeech(a, maxLength, splitCharacters);

                if (splittedTexts.length) {
                    let speechPart = {
                        type: thisClass.PART_TYPES.SPEECH,
                        value: splittedTexts
                    };
                    processed.splice(i, 1, speechPart);
                }
                else {
                    processed.splice(i, 1);
                }
            }
        }

        return processed;
    }

    /**
     * Splits text to smaller texts no longer than maxLength argument.
     * @param {string} text
     * @param {number} maxLength
     * @param {Array.<string>} splitCharacters
     * @returns {Array.<string>}
     */
    static splitSpeech(text, maxLength = 160, splitCharacters = ['.', '!', '?', ',', ';', ':', '-', ' ']) {
        text = text.trim();

        if (!text.length)
            return [];
        else if (text.length < maxLength)
            return [text];
        else {
            let maxLengthSubstr = text.substring(0, maxLength);
            for (var i = 0; i < splitCharacters.length; i++) {
                var char = splitCharacters[i];
                var charIndex = maxLengthSubstr.lastIndexOf(char);
                if (charIndex !== -1) {
                    let beforeCharSubstr = text.substring(0, charIndex + 1).trim();
                    let afterCharSubstr = text.substring(charIndex + 1);
                    return [beforeCharSubstr].concat(this.splitSpeech(afterCharSubstr, maxLength, splitCharacters));
                }
            }
        }

        //todo: handle when none of the split characters is not found. Throw error?
    }
}
SpeechSynthesisService.init();

export default SpeechSynthesisService;