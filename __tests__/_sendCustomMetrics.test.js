/* name: _sendCustomMetrics
 * usage: to set custom metrics before sending the hit
 */

var { oCONFIG, _sendCustomMetrics } = require('../Universal-Federated-Analytics.lib.js');
var default_GWT_UAID = [...oCONFIG.GWT_UAID];

afterEach(() => {
  oCONFIG.GWT_UAID = [...default_GWT_UAID];
});

test('_sendCustomMetrics: one UAN', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  _sendCustomMetrics(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(1);
});

test('_sendCustomMetrics: three UANs', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  oCONFIG.GWT_UAID.push('UA-123456');
  oCONFIG.GWT_UAID.push('UA-456789');
  _sendCustomMetrics(['dimension1'], '123', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(3);
});
