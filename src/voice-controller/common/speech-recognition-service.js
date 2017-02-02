/*
 Copyright 2016
 Pilyugin Alexey
 Shayakhmetov Ilnaz

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
import strings from './strings';
import merge from 'merge';
import utils from './controller-utils';
import Word from './word';

const BROWSER_RECOGNITION_LANGS = {
    [strings.consts.langs.en]: 'en-US',
    [strings.consts.langs.es]: 'es-US',
    [strings.consts.langs.ru]: 'ru-RU'
};

const RECOGNITION_WS_URL = 'wss://speechrecognition.competentum.com:4447/';

const DEFAULT_SETTINGS = {
    lang: 'en-US',
    grammars: [],
    maxAlternatives: 15,
    onaudiostart: function () {
        console.log('recognition: onaudiostart');
    },
    onsoundstart: function () {
        console.log('recognition: onsoundstart');
    },
    onspeechstart: function () {
        console.log('recognition: onspeechstart');
    },
    onspeechend: function () {
        console.log('recognition: onspeechend');
    },
    onsoundend: function () {
        console.log('recognition: onsoundend');
    },
    onaudioend: function () {
        console.log('recognition: onaudioend');
    },
    onresult: function () {
        console.log('recognition: onresult');
    },
    onnomatch: function () {
        console.log('recognition: onnomatch');
    },
    onerror: function () {
        console.log('recognition: onerror');
    },
    onstart: function () {
        console.log('recognition: onstart');
    },
    onend: function () {
        console.log('recognition: onend');
    }
};

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

navigator.getUserMedia = (navigator.getUserMedia
|| navigator.webkitGetUserMedia
|| navigator.mozGetUserMedia
|| navigator.msGetUserMedia);

export default class SpeechRecognitionService {

    /**
     * Returns true if Web Speech API is Supported
     * @returns {boolean}
     */
    static isBrowserSupported() {
        return typeof SpeechRecognition !== 'undefined';
    }

    /**
     * Returns grammar in the JSpeech Grammar Format (JSGF).
     * @param {string} name - grammar name
     * @param {Array.<string>} alternatives
     * @returns {string}
     */
    static createGrammar(name, alternatives) {
        return `#JSGF V1.0; grammar ${name}; public <${name}> = ${alternatives.join(' | ')} ;`;
    }

    static set lang(language){
        DEFAULT_SETTINGS.lang = language;
    }

    static listen(settings) {
        console.log('listening...');
        settings = merge(true, {}, DEFAULT_SETTINGS, settings);
        var useBrowser = this.isBrowserSupported();

        if (useBrowser) {
            this.listenWithBrowser(settings);
        }
        else {
            throw new Error("Your browser doesn't support browser speech recognition");
        }
    }

    static listenWithBrowser(settings) {
        this.stop();

        this._recognition = new SpeechRecognition();

        if (settings.grammars.length) {
            var speechRecognitionList = new SpeechGrammarList();
            for (let i = 0; i < settings.grammars.length; i++) {
                let grammar = settings.grammars[i];
                speechRecognitionList.addFromString(grammar, 1);
            }
            this._recognition.grammars = speechRecognitionList;
        }
        this._recognition.maxAlternatives = settings.maxAlternatives;
        this._recognition.continuous = true;
        this._recognition.interimResults = true;
        this._recognition.lang = settings.lang;

        this._recognition.onaudiostart = settings.onaudiostart;
        this._recognition.onsoundstart = settings.onsoundstart;
        this._recognition.onspeechstart = settings.onspeechstart;
        this._recognition.onspeechend = settings.onspeechend;
        this._recognition.onsoundend = settings.onsoundend;
        this._recognition.onaudioend = settings.onaudioend;
        this._recognition.onresult = settings.onresult;
        this._recognition.onnomatch = settings.onnomatch;
        this._recognition.onerror = settings.onerror;
        this._recognition.onstart = settings.onstart;
        this._recognition.onend = settings.onend;


        this._recognition.start();
    }


    static stop() {
        if (this._recognition) {
            this._recognition.stop();
        }
        if (this._webSocket && this._webSocket.readyState < 2) {
            var endMsg = {type: 'end'};
            this._webSocket.send(JSON.stringify(endMsg));
            this._webSocket.close();
        }
        if(this._recogniser){
            this._recogniser.stop();
        }
        if (this._stream) {
            var track = this._stream.getTracks()[0];
            track.stop();
        }
        console.log('stop listening...');
    }

    /**
     * Returns string from the alternatives array which has the greatest number of matches with dictionary array.
     * @param {Array.<string>} alternatives
     * @param {Array.<string>} dictionary
     * @returns {string}
     */
    static getMoreRelevantWord(alternatives, dictionary) {
        alternatives = alternatives.map(a => {
            return {text: a.toLowerCase(), count: 0};
        });
        var defaultResent = alternatives[0];
        for (var i = 0; i < alternatives.length; i++) {
            var alternative = ` ${alternatives[i].text} `;
            for (var j = 0; j < dictionary.length; j++) {
                var word = dictionary[j];
                if (alternative.indexOf(` ${word} `) !== -1) {
                    alternatives[i].count++;
                }
            }
        }
        alternatives.sort((a, b) => b.count - a.count);
        if (alternatives[0] != defaultResent) {
            console.log(`>>>REPLACED "${defaultResent.text}" to "${alternatives[0].text}"`);
        }
        return alternatives[0].count > defaultResent.count ? alternatives[0].text : defaultResent.text;
    }

    /**
     * Returns range of searchPhrase in sourcePhrase. If sourcePhrase does not contain searchPhrase, Range with index = -1 will be returned.
     * @param {string} sourcePhrase
     * @param {string} searchPhrase
     * @param {boolean} [phonetic = true] - use phonetic matching (default - true)
     * @returns {{index: number, length: number}}
     */
    static getRangeOf(sourcePhrase, searchPhrase, phonetic = true) {
        var range = {
            index: -1,
            length: 0
        };

        if (phonetic) {
            let srcWords = sourcePhrase.trim().split(' ');
            // create Words array with phonetic alternatives for source phrase
            let srcWordObjects = [];
            srcWords.forEach((a, index) => {
                // phonetic algorithm can work only with words, so all numbers should be convert to words
                // some words can be converted to several (21 -> 'twenty one'), so its should be splitted
                let fullWords = utils.convertToFullWords(a).split(' ');

                fullWords.forEach((w) => {
                    let wordObj = new Word(w);
                    // save index in srcWords array to be able restore it after matching
                    wordObj.index = index;
                    srcWordObjects.push(wordObj);
                });
            });

            // the same for search phrase
            let searchWords = searchPhrase.trim().split(' ');
            let searchWordObjects = [];
            searchWords.forEach((a) => {
                let fullWords = utils.convertToFullWords(a).split(' ');
                fullWords.forEach((w) => {
                    searchWordObjects.push(new Word(w));
                });
            });

            var matchedCount = 0;
            var firstWordIndex = -1;
            var matched = false;
            for (let i = 0; i < srcWordObjects.length; i++) {
                let srcWord = srcWordObjects[i];
                let searchWord = searchWordObjects[matchedCount];
                if (srcWord.isEqual(searchWord)) {
                    if (firstWordIndex == -1) {
                        firstWordIndex = i;
                    }
                    matchedCount++;
                }
                else {
                    firstWordIndex = -1;
                    matchedCount = 0;
                }
                if (matchedCount == searchWordObjects.length) {
                    matched = true;
                    break;
                }
            }

            if (matched) {
                let firstMatchedWord = srcWordObjects[firstWordIndex];
                let lastMatchedWord = srcWordObjects[firstWordIndex + matchedCount - 1];
                let matchedPhase = srcWords.slice(firstMatchedWord.index, lastMatchedWord.index + 1).join(' ');
                // replace initial search phrase with matched
                searchPhrase = searchPhrase.replace(/( *).*\w( *)$/, `$1${matchedPhase}$2`);
            }
        }

        range.index = sourcePhrase.indexOf(searchPhrase);
        range.length = searchPhrase.length;
        return range;
    }

    /**
     * Returns array of matched object from matchObjects array, which key is matched recognized words, and remaining (not matched) strings.
     * IMPORTANT: The initial recognized array will be changed and returned array is the same instance as the initial.
     * To best matching matchObjects should be sorted by key length (from highest to lowest) to prefer lager collocation.
     * @param {Array.<string|MatchObject>} recognized - array of recognized words
     * @param {Array.<MatchObject>} matchObjects
     * @param {boolean} [phonetic = true] - use phonetic matching (default - true)
     * @returns {Array.<string|MatchObject>}
     */
    static matchRecognition(recognized, matchObjects, phonetic = true) {

        matchObjects.forEach(function (v) {
            v.key = v.key.trim();
        });

        // join all neighboring strings to one
        utils.joinNeighboringStrings(recognized);
        recognized.forEach((currentValue, index) => {
            if (typeof currentValue === 'string') {
                // remove double whitespaces and add whitespaces in the beginning and the end of recognized and sought phrases to prevent part of word collisions
                recognized[index] = ` ${currentValue.replace(/ +/, ' ').trim()} `;
            }
        });

        for (let i = 0; i < matchObjects.length; i++) {
            var alt = matchObjects[i];

            for (let j = 0; j < recognized.length; j++) {
                let recognizedStr = recognized[j];
                if (typeof recognizedStr !== 'string')
                    continue;
                let keyPhrase = ` ${alt.key.toLowerCase()} `;
                let matchedRange = this.getRangeOf(recognizedStr, keyPhrase, phonetic);
                if (matchedRange.index != -1) {
                    // cut matched string and replace recognizedStr with the remaining two
                    let beforeStr = recognizedStr.substring(0, matchedRange.index).trim();
                    let afterStr = recognizedStr.substring(matchedRange.index + matchedRange.length).trim();

                    let matchedWithRemaining = [];
                    if (beforeStr) matchedWithRemaining.push(` ${beforeStr} `);
                    matchedWithRemaining.push(alt);
                    if (afterStr) matchedWithRemaining.push(` ${afterStr} `);

                    recognized.splice(j, 1, ...matchedWithRemaining);

                    break;
                }
            }
        }
        //trim strings
        recognized.forEach((currentValue, index) => {
            if (typeof currentValue === 'string') {
                recognized[index] = currentValue.trim();
            }
        });

        return recognized;
    }
}