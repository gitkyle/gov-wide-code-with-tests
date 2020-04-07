/* name: _sendCustomDimensions
 * usage: to set custom dimensions before sending the hit
 */

var { oCONFIG, _sendCustomDimensions } = require('../Universal-Federated-Analytics.lib.js');
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

test('_sendCustomDimensions: one UAN', () => {
  _sendCustomDimensions(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(gaCalls + 1);
});

test('_sendCustomDimensions: three UANs', () => {
  oCONFIG.GWT_UAID.push('UA-123456');
  oCONFIG.GWT_UAID.push('UA-456789');
  _sendCustomDimensions(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(gaCalls + 3);
});

test('_sendCustomDimensions: tObjectCheck mismatch', () => {
  tObjectCheck = 'notga';
  _sendCustomDimensions(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(gaCalls + 1);
});
