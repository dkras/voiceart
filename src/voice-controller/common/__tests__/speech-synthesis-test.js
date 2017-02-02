'use strict';
describe('SpeechSynthesisService service test', function () {
    var SpeechSynthesisService = require('../speech-synthesis-service');

    var textToSplit = 'Hello! Good Job. We are using speechSynthesis via cordova on IOS, where logging some utterances causes the logger to die.';
    var textToProcess = 'There are 3 fields that have to be filled with the correct answer. ${pause 0.5} The first field is selected. ${sound beep} ${pause 3} Peaks and valleys on a polynomial...';


    it('splitSpeech: main functionality', function () {
        var splitted = SpeechSynthesisService.splitSpeech(textToSplit, 50);
        expect(splitted).toEqual(['Hello! Good Job.', 'We are using speechSynthesis via cordova on IOS,', 'where logging some utterances causes the logger', 'to die.']);
    });

    it('processSpeechText: main functionality', function () {
        var processed = SpeechSynthesisService.processSpeechText(textToProcess, 50);
        expect(processed).toEqual([
            {
                type: 'speech',
                value: [
                    'There are 3 fields that have to be filled with',
                    'the correct answer.'
                ]
            },
            {
                type: 'pause',
                value: '0.5'
            },
            {
                type: 'speech',
                value: [
                    'The first field is selected.'
                ]
            },
            {
                type: 'sound',
                value: 'beep'
            },
            {
                type: 'pause',
                value: '3'
            },
            {
                type: 'speech',
                value: [
                    'Peaks and valleys on a polynomial...'
                ]
            }
        ]);
    });


});