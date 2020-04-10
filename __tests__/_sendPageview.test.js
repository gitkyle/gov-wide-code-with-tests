/* name: _sendPageview
 * usage: to set hit type to Pageview.
 */

var { _sendPageview } = require('../Universal-Federated-Analytics.lib.js');

test('_sendPageview: valid event', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  _sendPageview('/home', 'Home Page', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(1);
});

test('_sendPageview: missing required param', () => {
  var createTracker = jest.fn();
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  _sendPageview('', '', createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(0);
});
