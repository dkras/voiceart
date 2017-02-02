/**
 * Created by 96664_000 on 25.11.2016.
 */

require('mathquill/build/mathquill.css');
var MathQuill = require('imports?jQuery=jquery,$=jquery,this=>window!exports?MathQuill!mathquill/build/mathquill');
var mq = MathQuill.noConflict();
module.exports = mq;

delete window.MathQuill;
//delete window.jQuery;
