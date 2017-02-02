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

var merge = require('merge');
var alternatives = require('./alternatives');

var strings = {};

strings.SERVICE_NAME = 'Vicki';
strings.SERVICE_NAME_ALTERNATIVES = [
    'vk',
    'viki',
    'wiki',
    'vicky',
    'vicki',
    'ricky',
    'ricki',
    'rikki',
    'avicii',
    'nikki',
    'nicki',
    'we can',
    'they can',
    'richard'
];

strings.REPLACE_MAP = [
    {
        phrase: strings.SERVICE_NAME,
        alternatives: strings.SERVICE_NAME_ALTERNATIVES
    },
    {
        phrase: 'next field',
        alternatives: ['next film', 'next week'],
    },
    {
        phrase: 'previous field',
        alternatives: 'previous film'
    },
    {
        phrase: 'list options',
        alternatives: 'lease options'
    },
    {
        phrase: 'submit',
        alternatives: ['suck me up', 'suck me', 'set me']
    },
    {
        phrase: 'vicki submit',
        alternatives: 'they can submit'
    }
].concat(alternatives);

for (var i = 0; i < strings.REPLACE_MAP.length; i++) {
    var replaceObj = strings.REPLACE_MAP[i];
    replaceObj.alternativesRE = getAlternativesRegExp(replaceObj.alternatives)
}

strings.ORDINAL_CHOICE_PREFIX_1 = 'choice';
strings.ORDINAL_CHOICE_PREFIX_2 = 'option';
strings.consts = {
    langs: {
        en: 'en_US',
        es: 'es_US',
        ru: 'ru_RU'
    }
};
strings.commands = {
    CLEAR: 'Clear',
    HELP: 'Help',
    LIST_OPTIONS: 'List options',
    LIST_OPTIONS_ALT_1: 'List of options',
    LIST_OPTIONS_ALT_2: 'Options list',
    NEXT_FIELD: 'Next field',
    PREV_FIELD: 'Previous field',
    REPEAT: 'Repeat',
    SAY: 'Say it please',
    STOP: 'Stop',
    SUBMIT: 'Submit',
    CONTINUE: 'Continue'
};
strings.commands.CLEAR_HINT = `To clear current answer, say "${strings.SERVICE_NAME} ${strings.commands.CLEAR}".`;
strings.commands.HELP_HINT = `If you want to know available commands, say "${strings.SERVICE_NAME} ${strings.commands.HELP}".`;
strings.commands.FIELD_NAVIGATION_HINT = `To navigate between fields say ${strings.SERVICE_NAME} ${strings.commands.NEXT_FIELD} or ${strings.SERVICE_NAME} ${strings.commands.PREV_FIELD}.`;
strings.commands.LIST_OPTIONS_HINT = `To know available choices say ${strings.SERVICE_NAME} ${strings.commands.LIST_OPTIONS}.`;
strings.commands.REPEAT_HINT = `To repeat question say ${strings.SERVICE_NAME} ${strings.commands.REPEAT}.`;
strings.commands.STOP_HINT = `To turn off the voice controller say "${strings.SERVICE_NAME} ${strings.commands.STOP}".`;
strings.commands.SUBMIT_HINT = `To apply answer say "${strings.SERVICE_NAME} ${strings.commands.SUBMIT}".`;

strings.messages = {
    ANSWER_IS: 'Your answer is:',
    CLEAR_HINT: `To reenter, say "${strings.SERVICE_NAME} ${strings.commands.CLEAR}" and your new answer.`,
    CLEAR_HINT_SHORT: `To reenter, say "${strings.SERVICE_NAME} ${strings.commands.CLEAR}".`,
    CLEARED_FEEDBACK: 'Answer was cleared. Now you can say another.',
    CLEARED_FEEDBACK_SHORT: 'Answer was cleared.',
    CORRECT_ANSWER: 'That\'s correct!',
    EMPTY_ANSWER: `Your answer is empty.`,
    FIELD_SELECTED_1: 'The',
    FIELD_SELECTED_2: 'field is selected.',
    INCORRECT_ANSWER: `That\'s incorrect. Please try again! To reenter, say "${strings.SERVICE_NAME} ${strings.commands.CLEAR}" and your new answer.`,
    INITIAL_SPEECH_MULTI_1: 'There are',
    INITIAL_SPEECH_MULTI_2: 'fields that have to be filled with the correct answer.',
    MC_HINT_MULTIPLE: 'You can choose one or more options.',
    MC_HINT_SINGLE: 'You can choose only one option.',
    NO_SPEECH_ERROR: 'Your voice is not recognized. Recognition will be stopped.',
    NOT_ALLOWED_ERROR: 'Microphone is not plugged in or not allowed on this page. Please plug in your microphone and allow to access it on this page. Then try again.',
    PARTIALLY_CORRECT_ANSWER: `That\'s partially correct. Please try again! To reenter, say "${strings.SERVICE_NAME} ${strings.commands.CLEAR}" and your new answer.`,
    SUBMIT_HINT: `To apply it, please say "${strings.SERVICE_NAME} ${strings.commands.SUBMIT}".`,
    TRY_AGAIN: `Please try again.`,
    SPEAK: `Please speak after the tone`
};

// Control Panel
strings.cp = {
    ariaLabels: {
        TURN_ON_BUTTON: 'Turn on the Voice Controller'
    },
    titles: {
        TURN_ON_BUTTON: 'To start the test click this button whenever you are ready.',
        TURN_OFF_BUTTON: 'Turn off the Voice Controller',
        HELP_BUTTON: 'Help',
        SETTINGS_BUTTON: 'Settings',
        SKIP_BUTTON: 'Skip'
    }
};

// Settings Form
strings.sf = {
    CHECK_PHRASE: 'The quick brown fox jumps over the lazy dog.',
    TIME_SUFFIX: 'sec',
    RESET_DEFAULTS_BUTTON_LABEL: 'Reset',
    labels: {
        DIALOG_TITLE: 'Settings',
        ADVANCED_MODE: 'Advanced Mode',
        ALLOW_COMMANDS_WITHOUT_PREFIX: 'Allow Commands Without Prefix',
        PAUSE_INTERVAL: 'Pause interval',
        RESET_DEFAULTS: 'Reset to Defaults',
        SPEECH_SPEED: 'Speech Speed',
        USER_RESPONSE_TIMEOUT: 'User response timeout',
        USE_BROWSER: 'Use Browser Recognition',
        LANG: 'Language'
    },
    descriptions: {
        ADVANCED_MODE: 'Recommended for the experienced users, the advanced playback mode includes shorter versions of the introductory phrases.',
        PAUSE_INTERVAL: 'Defines the longest possible pause between the words inside a single voice command or the answer input.',
        RESET_DEFAULTS: 'Reset all settings to defaults',
        SPEECH_SPEED: 'Defines the Voice Controller speech speed.',
        CHECK_SPEECH_SPEED: 'Check up speech speed',
        USER_RESPONSE_TIMEOUT: 'Defines how long the system will wait for the user voice response in the recognition mode.'
    },
    langs: {
        en_US: 'US English',
        ru_RU: 'Русский',
        es_US: 'US Español'
    }
};
//selector class namespace
strings.namespace = 'vart';
strings.types = [
    'essay',
    'dropdown',
    'fitb',
    'mc'
];
strings.selectors = {
    NAMESPACE: 'vart',
    FIELD: 'field',
    CHOICE: 'choice',
    OPTION: 'option',
    TITLE: 'title'
};
strings.types.forEach(type => {
    strings.selectors[type.toUpperCase()] = type;
});

/**
 * Returns RegExp for replacing passed alternatives
 * @param {string|Array.<string>} alternatives
 * @returns {RegExp}
 */
function getAlternativesRegExp(alternatives) {
    if (typeof alternatives === 'string') {
        alternatives = [alternatives];
    }
    return new RegExp(`\\b(${alternatives.join('|')})\\b`, 'ig');
}

export default strings;