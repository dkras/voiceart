'use strict';

/**
 * Load each test using webpack's dynamic require with contexts.
 */
var context = require.context('./src', true, /^.*(__tests__\/).*-test\.js?$/);

context.keys().forEach(context);