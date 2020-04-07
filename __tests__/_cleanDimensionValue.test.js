/* name: _cleanDimensionValue
 * usage: make sure the dimension slot number is passed correctly
 */

var { _cleanDimensionValue } = require('../Universal-Federated-Analytics.lib.js');

test('_cleanDimensionValue: valid "dimension1"', () => {
  var paramValue = 'dimension1';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension1');
});

test('_cleanDimensionValue: valid "dimension10"', () => {
  var paramValue = 'dimension10';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension10');
});

test('_cleanDimensionValue: valid "dimension100"', () => {
  var paramValue = 'dimension100';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension100');
});

test('_cleanDimensionValue: valid "dimension200"', () => {
  var paramValue = 'dimension200';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension200');
});

test('_cleanDimensionValue: valid "1"', () => {
  var paramValue = '1';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension' + paramValue);
});

test('_cleanDimensionValue: valid "10"', () => {
  var paramValue = '10';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension' + paramValue);
});

test('_cleanDimensionValue: valid "100"', () => {
  var paramValue = '100';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension' + paramValue);
});

test('_cleanDimensionValue: valid "200"', () => {
  var paramValue = '200';
  expect(_cleanDimensionValue(paramValue)).toBe('dimension' + paramValue);
});

test('_cleanDimensionValue: invalid "dimension0"', () => {
  var paramValue = 'dimension0';
  expect(_cleanDimensionValue(paramValue)).toBe('');
});

test('_cleanDimensionValue: invalid "dimension201"', () => {
  var paramValue = 'dimension201';
  expect(_cleanDimensionValue(paramValue)).toBe('');
});

test('_cleanDimensionValue: invalid "0"', () => {
  var paramValue = '0';
  expect(_cleanDimensionValue(paramValue)).toBe('');
});

test('_cleanDimensionValue: invalid "201"', () => {
  var paramValue = '201';
  expect(_cleanDimensionValue(paramValue)).toBe('');
});

test('_cleanDimensionValue: invalid "abc"', () => {
  var paramValue = 'abc';
  expect(_cleanDimensionValue(paramValue)).toBe('');
});

test('_cleanDimensionValue: invalid false', () => {
  var paramValue = false;
  expect(_cleanDimensionValue(paramValue)).toBe(undefined);
});
