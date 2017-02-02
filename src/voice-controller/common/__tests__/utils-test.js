'use strict';
describe('Utils test', function () {
    var utils = require('../controller-utils');

    it('joinNeighboringStrings: simple joining', function () {
        var arr = [{}, 'bill clinton', 'andrew jackson', 'john adams', {}, 'join', 'me', 'too'];
        utils.joinNeighboringStrings(arr);
        expect(arr).toEqual([{}, 'bill clinton andrew jackson john adams', {}, 'join me too']);
    });

    it('joinNeighboringStrings: custom separator', function () {
        var arr = [{}, 'bill clinton', 'andrew jackson', 'john adams', {}, 'join', 'me', 'too'];
        utils.joinNeighboringStrings(arr, ', ');
        expect(arr).toEqual([{}, 'bill clinton, andrew jackson, john adams', {}, 'join, me, too']);
    });

    it('toWordsOrdinal: simple conversation', function () {
        var ordinal = utils.toWordsOrdinal(3121);
        expect(ordinal).toEqual('three thousand, one hundred twenty first');
    });

    it('convertToFullWords: main functionality', function () {
        var pairs = [
            ['21', 'twenty one'],
            ['12th', 'twelfth'],
            ['21st', 'twenty first'],
            ['ch4', 'ch four'],
            ['hello', 'hello'],
            ['I\'m 1st', 'I\'m first'],
            ['11thousandth', 'eleven thousandth']
        ];
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            expect(utils.convertToFullWords(pair[0])).toEqual(pair[1]);
        }
    });

});