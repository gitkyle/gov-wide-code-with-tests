/* name: _defineCookieDomain
 * usage: to define cookie domain based on the SUBDOMAIN_BASED variable value
 */

var { oCONFIG, _defineCookieDomain } = require('../Universal-Federated-Analytics.lib.js');

var default_SUBDOMAIN_BASED = oCONFIG.SUBDOMAIN_BASED;
var default_COOKIE_DOMAIN = oCONFIG.COOKIE_DOMAIN;
var default_location = window.location;

beforeEach(() => {
  delete window.location;
});

afterEach(() => {
  window.location = default_location;
  oCONFIG.SUBDOMAIN_BASED = default_SUBDOMAIN_BASED;
  oCONFIG.COOKIE_DOMAIN = default_COOKIE_DOMAIN;
});

test('_defineCookieDomain: subdomain-based', () => {
  window.location = new URL('https://www.usa.gov');
  oCONFIG.SUBDOMAIN_BASED = true;
  _defineCookieDomain();
  expect(oCONFIG.COOKIE_DOMAIN).toBe('usa.gov');
});

test('_defineCookieDomain: not subdomain-based', () => {
  window.location = new URL('https://test.google.com');
  oCONFIG.SUBDOMAIN_BASED = false;
  _defineCookieDomain();
  expect(oCONFIG.COOKIE_DOMAIN).toBe('google.com');
});
