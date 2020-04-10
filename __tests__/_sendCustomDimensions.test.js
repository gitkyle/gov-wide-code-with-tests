/* name: _sendCustomDimensions
 * usage: to set custom dimensions before sending the hit
 */

var { oCONFIG, _sendCustomDimensions } = require('../Universal-Federated-Analytics.lib.js');

var default_GWT_UAID = [...oCONFIG.GWT_UAID];

afterEach(() => {
  oCONFIG.GWT_UAID = [...default_GWT_UAID];
});

test('_sendCustomDimensions: one UAN', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  _sendCustomDimensions(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(1);
});

test('_sendCustomDimensions: three UANs', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  oCONFIG.GWT_UAID.push('UA-123456');
  oCONFIG.GWT_UAID.push('UA-456789');
  _sendCustomDimensions(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(3);
});
