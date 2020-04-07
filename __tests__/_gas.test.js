/* name: gas
 * usage: to set hit parameters or send hits.
 * This is the only public function that should be called by users. */

var { gas } = require('../Universal-Federated-Analytics.lib.js');
var _sendPageview = jest.fn();
var _sendEvent = jest.fn();
var _cleanBooleanParam = jest.fn();
var _sendCustomDimensions = jest.fn();
var _sendCustomMetrics = jest.fn();

test('gas: missing required params', () => {
  gas();
  expect(_sendPageview.mock.calls.length).toBe(0);
  expect(_sendEvent.mock.calls.length).toBe(0);
  expect(_cleanBooleanParam.mock.calls.length).toBe(0);
  expect(_sendCustomDimensions.mock.calls.length).toBe(0);
  expect(_sendCustomMetrics.mock.calls.length).toBe(0);
});

test('gas: hitType pageview', () => {
  gas(
    'command',
    'pageview',
    'p1',
    undefined,
    undefined,
    undefined,
    undefined,
    _sendPageview,
    _sendEvent,
    _cleanBooleanParam,
    _sendCustomDimensions,
    _sendCustomMetrics
  );
  expect(_sendPageview.mock.calls.length).toBe(1);
  expect(_sendEvent.mock.calls.length).toBe(0);
  expect(_cleanBooleanParam.mock.calls.length).toBe(0);
  expect(_sendCustomDimensions.mock.calls.length).toBe(0);
  expect(_sendCustomMetrics.mock.calls.length).toBe(0);
});

test('gas: hitType event', () => {
  gas(
    'command',
    'event',
    'p1',
    'p2',
    undefined,
    undefined,
    true,
    _sendPageview,
    _sendEvent,
    _cleanBooleanParam,
    _sendCustomDimensions,
    _sendCustomMetrics
  );
  expect(_sendPageview.mock.calls.length).toBe(1);
  expect(_sendEvent.mock.calls.length).toBe(1);
  expect(_cleanBooleanParam.mock.calls.length).toBe(1);
  expect(_sendCustomDimensions.mock.calls.length).toBe(0);
  expect(_sendCustomMetrics.mock.calls.length).toBe(0);
});
