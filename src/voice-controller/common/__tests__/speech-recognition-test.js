'use strict';
describe('SpeechRecognitionService service test', function () {
    var SpeechRecognitionService = require('../speech-recognition-service');
    var MatchObject = require('../match-object');

    var matchObjects = [
        new MatchObject('list options', 'Command: list options!'),
        new MatchObject('brown fox', 'I am brown fox!'),
        new MatchObject('brown', 'I am brown!'),
        new MatchObject('fox', 'I am fox!'),
        new MatchObject('some', 'I am some!'),
        new MatchObject('21st', 'Twenty First'),
        new MatchObject('1st', 'First'),
        new MatchObject('5th', 'Fifth'),
        new MatchObject('6th', 'Sixth'),
        new MatchObject('10', 'Ten'),
        new MatchObject('3', 'Three')
    ];

    it('matchRecognition: simple ordering', function () {
        var recognized = ['fox', 'brown'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            new MatchObject('fox', 'I am fox!'),
            new MatchObject('brown', 'I am brown!')
        ]);
    });

    it('matchRecognition: ordering', function () {
        var recognized = ['bill clinton', 'andrew jackson', 'john adams'];
        var map = [
            new MatchObject('Andrew Jackson', 'I am Andrew Jackson!'),
            new MatchObject('James Madison', 'I am James Madison!'),
            new MatchObject('Bill Clinton', 'I am Bill Clinton!'),
            new MatchObject('John Adams', 'I am John Adams!')
        ];
        var matched = SpeechRecognitionService.matchRecognition(recognized, map);
        expect(matched).toEqual([
            new MatchObject('Bill Clinton', 'I am Bill Clinton!'),
            new MatchObject('Andrew Jackson', 'I am Andrew Jackson!'),
            new MatchObject('John Adams', 'I am John Adams!')
        ]);
    });

    it('matchRecognition: max collocation priority', function () {
        var recognized = ['brown', 'fox'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([new MatchObject('brown fox', 'I am brown fox!')]);
    });

    it('matchRecognition: max collocation priority with collision', function () {
        var recognized = ['brown brown', 'fox'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            new MatchObject('brown', 'I am brown!'),
            new MatchObject('brown fox', 'I am brown fox!')
        ]);
    });

    it('matchRecognition: part of word collision', function () {
        var recognized = ['somecompoundword fox'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            'somecompoundword',
            new MatchObject('fox', 'I am fox!')
        ]);
    });

    it('matchRecognition: phonetic matching', function () {
        var recognized = ['braun', 'fax', 'least', 'options'];

        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            new MatchObject('brown fox', 'I am brown fox!'),
            new MatchObject('list options', 'Command: list options!')
        ]);
    });

    it('matchRecognition: order numbers matching', function () {
        var recognized = ['6th', 'tree', '1st', '10', '20', '1st'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            new MatchObject('6th', 'Sixth'),
            new MatchObject('3', 'Three'),
            new MatchObject('1st', 'First'),
            new MatchObject('10', 'Ten'),
            new MatchObject('21st', 'Twenty First')
        ]);
    });

    it('matchRecognition: partial numbers matching', function () {
        var recognized = ['We have lived in 21st century already 23 years.', 'I will celebrate my 26th birthday soon.'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            'We have lived in',
            new MatchObject('21st', 'Twenty First'),
            'century already',
            new MatchObject('3', 'Three'),
            'years. I will celebrate my',
            new MatchObject('6th', 'Sixth'),
            'birthday soon.'
        ]);
    });

    it('matchRecognition: order numbers matching with max collocation priority', function () {
        var recognized = ['6th', '1st', 'brown', 'fax'];
        var matched = SpeechRecognitionService.matchRecognition(recognized, matchObjects);
        expect(matched).toEqual([
            new MatchObject('6th', 'Sixth'),
            new MatchObject('1st', 'First'),
            new MatchObject('brown fox', 'I am brown fox!')
        ]);
    });

});