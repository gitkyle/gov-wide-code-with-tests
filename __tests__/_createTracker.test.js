var { oCONFIG, createTracker } = require('../Universal-Federated-Analytics.lib.js');

test('createTracker: sendPv false', () => {
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  var _URIHandler = jest.fn();
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  createTracker(false, _URIHandler);
  expect(window[x].mock.calls.length).toBe(11);
});

test('createTracker: sendPv true', () => {
  window['GoogleAnalyticsObject'] = 'ga';
  var x = window['GoogleAnalyticsObject'];
  window[x] = jest.fn();
  var _URIHandler = jest.fn();
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  createTracker(true, _URIHandler);
  expect(window[x].mock.calls.length).toBe(12);
});
