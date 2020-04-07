/* name: _sendPageview
 * usage: to set hit type to Pageview.
 */

var { _sendPageview } = require('../Universal-Federated-Analytics.lib.js');
var createTracker = jest.fn();
window['GoogleAnalyticsObject'] = 'ga';
var x = window['GoogleAnalyticsObject'];
window[x] = jest.fn();
var gaCalls;

beforeAll(() => {
  tObjectCheck = 'ga';
});

beforeEach(() => {
  gaCalls = window[x].mock.calls.length;
});

afterEach(() => {
  tObjectCheck = 'ga';
});

test('_sendPageview: valid event', () => {
  _sendPageview('/home', 'Home Page', createTracker);
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(gaCalls + 1);
});

test('_sendPageview: missing required param', () => {
  _sendPageview();
  expect(createTracker.mock.calls.length).toBe(0);
  expect(window[x].mock.calls.length).toBe(gaCalls);
});

test('_sendPageview: tObjectCheck mismatch', () => {
  tObjectCheck = 'notga';
  _sendPageview('/home', 'Home Page', createTracker);
  expect(createTracker.mock.calls.length).toBe(1);
  expect(window[x].mock.calls.length).toBe(gaCalls + 1);
});
