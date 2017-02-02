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

import AsyncInitialized from '../common/async-initialized';
import ItemEvent from './../common/item/item-event';
import Command from '../common/command';
import commonUtils from '../../common/common-utils';
import strings from '../common/strings';
import MET from 'cg-met';
import merge from 'merge';
import utils from './../common/controller-utils';

const ITEM_CLASS = 'container';
const MATH_CLASS = 'MathJax';
const MATH_ATTR = 'data-mathml';
const STEPS_ID = 'past-steps';
const FIELD_CLASS = 'field';
const TITLE_SELECTOR= '.formquestion'
const SUBMIT_BUTTON_SELECTOR = '.btn-success';
const CHOICE_SELECTOR = 'tr';

function isEmptyMathML(mathML) {
  //todo: refactor this
  return !mathML || mathML == '<math xmlns="http://www.w3.org/1998/Math/MathML" />' || '<math xmlns="http://www.w3.org/1998/Math/MathML" />';
}

export default class SwItem extends AsyncInitialized {

  constructor(domElement, settings, commandService){
    super();
    this.settings = merge(true, {}, this.constructor.DEFAULT_SETTINGS, settings);
    this.commandService = commandService;
    this.domElement = this.constructor.findItemElement(domElement);
    //this.fieldElement = this.domElement.querySelector(`.${FIELD_CLASS}`);
    this.hasInitialAlreadyRead = false;
    this._initHook();
    this.buildModel();
  }

  static get CONTEXT() {
    return 'dc';
  }
  static findItemElement(domElement) {
    return domElement.matches(`.${ITEM_CLASS}`) ? domElement : domElement.querySelector(`.${ITEM_CLASS}`);
  }

  isSubmitted(){
    return false;
  }
  isAnswerEmpty(){
    let answerEmpty = true;
    var choices = this._model.choices;
    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      if( choice.element.checked)
        answerEmpty = false;
    }
    return answerEmpty;
  }
  isAnswerInputAvailable(){
    return this.isAnswerEmpty();
  }
  getAnswerAlternatives() {
    return [];
  }
  reset(){

  }
  clear()
  {
    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      choice.element.checke = false;
    }
  }


  setStateByRecognized(recognised){
    console.log(recognised)
    var choices = this._model.choices;
    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      console.log(recognised, choice.valueString);
      choice.element.checked = recognised.indexOf(choice.valueString) != -1;
    }
  }


  /** @inheritdoc */
  _initHook(){
    this.submitButton = this.domElement.querySelector(SUBMIT_BUTTON_SELECTOR);
    console.log();
    this.submitButton.addEventListener('click', ()=> {
      this.emit(ItemEvent.SUBMIT);
  });
}


/** @inheritdoc */
submit() {
  this.submitButton.click();
  this.emit(ItemEvent.SUBMIT);
}

buildModel() {
  if (this._model) {
    return this._model
  }

  var domElement = this.domElement;
  var model = {
    subtype: 'mc',
    choices: []
  };

  let cElements = this.domElement.querySelectorAll(CHOICE_SELECTOR);
  for ( let i = 0; i < cElements.length; i++){
    let labelElement = cElements[i].querySelector('.inputLabel');
    let inputElement = cElements[i].querySelector('.checkbox');
    let choice = {
      display: utils.getElementText(labelElement),
      value: inputElement.value,
      valueString: inputElement.getAttribute('valueString'),
      element: inputElement
    };
    choice.speech = inputElement.getAttribute('speech') || choice.display;
    var alts = inputElement.getAttribute('alternatives');
    choice.alternatives = alts ? alts.split(',') : [];
    model.choices.push(choice);
  }

  console.log(model);
  this._model = model;
  return this._model;
}

readWhenStateChange(){
  let self = this;
  const resultIconSelector = '.message-box > .message-icon-box > .message-icon:not(.ng-hide)';
  processAnswer();
  function processAnswer(){
    let result = self.domElement.querySelector(resultIconSelector);
    if(result != null){
      let resultClass = self.gradePanel.querySelector(resultIconSelector + ' > div').className;
      let score = 0, result = '';
      switch(resultClass){
        case 'step-info-valid-icon':
          score = 0.5;
          result = self.getFeedbackSpeech() + self.getQuestionSpeech() + self.getStepsSpeech();
          break;
        case 'step-info-hint-icon':
          score = 0.5;
          result =  self.getFeedbackSpeech();
          break;
        case 'step-info-invalid-icon':
          score = 0;
          result =  self.getFeedbackSpeech() + self.getQuestionSpeech();
          break;
        case 'step-info-success-icon':
          score = 0;
          result =  self.getFeedbackSpeech();
          break;
      }
      self.emit(ItemEvent.RESPONSE_RECEIVED, {
        score: score,
        feedback: result
      });
    } else {
      setTimeout(processAnswer, 100);
    }
  }
}

_getReady(){
  return Promise.resolve();
}
_registerCommands() {
  var commands = this.getCommands();
  commands.forEach((command) => {
    this.commandService.register(command);
});
}
//redefined methods
getCommands() {
  if (!this._commands) {
    this._commands = [];

    this._commands.push(new Command("show hint", ()=> {
      var hintBtn = this.gradePanel.querySelector('.getHintButton').querySelector('.step-gethint-box');
    if(window.Simulator)
      Simulator.gestures.tap(hintBtn);
  }, 'to show hint say "Vicki show hint"', 100));

}
return this._commands;
}

getFeedbackSpeech(){
  return ''
  //return this.domElement.querySelector('.message-box').querySelector('.message-text > span').innerHTML;
}
getQuestionSpeech(){
  let titleSpeech = '';
  let pars = this.domElement.querySelectorAll(TITLE_SELECTOR);
  titleSpeech = pars[0].innerHTML + ' ';
  return titleSpeech;
}
readTask(preSpeech = '', postSpeech = '') {
  if (!this.hasInitialAlreadyRead) {
    preSpeech += ` ${this.initialSpeech}`;
  }
  this.commandService.execute(strings.commands.SAY, preSpeech + this.getQuestionSpeech()+ this.getFeedbackSpeech() + this.currentAnswerSpeech );
  this.hasInitialAlreadyRead = true;
}

getStateToSpeech(){
  return '';
}

get currentAnswerSpeech() {
  if (this.isAnswerEmpty()) {
    return strings.messages.EMPTY_ANSWER;
  }
  else {
    let answerSpeech = `${strings.messages.ANSWER_IS} ${this.getStateToSpeech()}`;
    if (this.settings.isAdvancedMode()) {
      answerSpeech = `${answerSpeech} ${strings.messages.CLEAR_HINT_SHORT}`;
    }
    else {
      answerSpeech = `${answerSpeech} ${strings.messages.SUBMIT_HINT} ${strings.messages.CLEAR_HINT}`;
    }
    console.log(this);
    return answerSpeech;
  }
}


get initialSpeech(){
  return 'There is multiple-choice question ';
}

};