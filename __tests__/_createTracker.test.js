var { oCONFIG, createTracker } = require('../Universal-Federated-Analytics.lib.js');
window['GoogleAnalyticsObject'] = 'ga';
var x = window['GoogleAnalyticsObject'];
window[x] = jest.fn();
var gaCalls;
var _URIHandler = jest.fn();

var default_COOKIE_DOMAIN = oCONFIG.COOKIE_DOMAIN;

beforeEach(() => {
  gaCalls = window[x].mock.calls.length;
});

afterEach(() => {
  oCONFIG.COOKIE_DOMAIN = default_COOKIE_DOMAIN;
});

test('createTracker: sendPv false', () => {
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  createTracker(false, _URIHandler);
  expect(window[x].mock.calls.length).toBe(gaCalls + 11);
});

test('createTracker: sendPv true', () => {
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  createTracker(true, _URIHandler);
  expect(window[x].mock.calls.length).toBe(gaCalls + 12);
});
