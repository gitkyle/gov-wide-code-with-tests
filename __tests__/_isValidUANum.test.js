/* name: _isValidUANum
 * usage: to check if a string is a valid UA
 */

var { _isValidUANum } = require('../Universal-Federated-Analytics.lib.js');

test('_isValidUANum: valid UAN "ua-11111-1"', () => {
  var uan = 'ua-11111-1';
  expect(_isValidUANum(uan)).toBe(true);
});

test('_isValidUANum: valid UAN uppercase "UA-11111-1"', () => {
  var uan = 'UA-11111-1';
  expect(_isValidUANum(uan)).toBe(true);
});

test('_isValidUANum: invalid UAN "11111-1"', () => {
  var uan = '11111-1';
  expect(_isValidUANum(uan)).toBe(false);
});

test('_isValidUANum: invalid UAN "ua11111-1"', () => {
  var uan = 'ua11111-1';
  expect(_isValidUANum(uan)).toBe(false);
});

test('_isValidUANum: invalid UAN "ua-11111-"', () => {
  var uan = 'ua-11111-';
  expect(_isValidUANum(uan)).toBe(false);
});

test('_isValidUANum: invalid UAN "ua-11111"', () => {
  var uan = 'ua-11111';
  expect(_isValidUANum(uan)).toBe(false);
});

test('_isValidUANum: invalid UAN "ua--11111-1"', () => {
  var uan = 'ua--11111-1';
  expect(_isValidUANum(uan)).toBe(false);
});

test('_isValidUANum: invalid UAN "ua111111"', () => {
  var uan = 'ua111111';
  expect(_isValidUANum(uan)).toBe(false);
});

test('_isValidUANum: invalid UAN "ua-11111e-1"', () => {
  var uan = 'ua-11111e-1';
  expect(_isValidUANum(uan)).toBe(false);
});
