/* name: _sendCustomMetrics
 * usage: to set custom metrics before sending the hit
 */

var { oCONFIG, _sendCustomMetrics } = require('../Universal-Federated-Analytics.lib.js');
var createTracker = jest.fn();
window['GoogleAnalyticsObject'] = 'ga';
var x = window['GoogleAnalyticsObject'];
window[x] = jest.fn();
var default_GWT_UAID = [...oCONFIG.GWT_UAID];
var gaCalls;

beforeAll(() => {
  tObjectCheck = 'ga';
});

beforeEach(() => {
  gaCalls = window[x].mock.calls.length;
});

afterEach(() => {
  oCONFIG.GWT_UAID = [...default_GWT_UAID];
  tObjectCheck = 'ga';
});

test('_sendCustomMetrics: one UAN', () => {
  _sendCustomMetrics(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(gaCalls + 1);
});

test('_sendCustomMetrics: three UANs', () => {
  oCONFIG.GWT_UAID.push('UA-123456');
  oCONFIG.GWT_UAID.push('UA-456789');
  _sendCustomMetrics(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(gaCalls + 3);
});

test('_sendCustomMetrics: tObjectCheck mismatch', () => {
  tObjectCheck = 'notga';
  _sendCustomMetrics(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(gaCalls + 1);
});
