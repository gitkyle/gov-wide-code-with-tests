/* name: _cleanBooleanParam
 * usage: to map several string values to boolean values
 */

var { _cleanBooleanParam } = require('../Universal-Federated-Analytics.lib.js');

test('_cleanBooleanParam: no match, does not map', () => {
  var paramValue = 'hello';
  expect(_cleanBooleanParam(paramValue)).toBe('hello');
});

test('_cleanBooleanParam: "true" -> true', () => {
  var paramValue = 'true';
  expect(_cleanBooleanParam(paramValue)).toBe(true);
});

test('_cleanBooleanParam: "on" -> true', () => {
  var paramValue = 'on';
  expect(_cleanBooleanParam(paramValue)).toBe(true);
});

test('_cleanBooleanParam: "yes" -> true', () => {
  var paramValue = 'yes';
  expect(_cleanBooleanParam(paramValue)).toBe(true);
});

test('_cleanBooleanParam: "1" -> true', () => {
  var paramValue = '1';
  expect(_cleanBooleanParam(paramValue)).toBe(true);
});

test('_cleanBooleanParam: "false" -> false', () => {
  var paramValue = 'false';
  expect(_cleanBooleanParam(paramValue)).toBe(false);
});

test('_cleanBooleanParam: "off" -> false', () => {
  var paramValue = 'off';
  expect(_cleanBooleanParam(paramValue)).toBe(false);
});

test('_cleanBooleanParam: "no" -> false', () => {
  var paramValue = 'no';
  expect(_cleanBooleanParam(paramValue)).toBe(false);
});

test('_cleanBooleanParam: "0" -> false', () => {
  var paramValue = '0';
  expect(_cleanBooleanParam(paramValue)).toBe(false);
});
