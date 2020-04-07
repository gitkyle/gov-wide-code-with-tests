/* name: _isExcludedReferrer
 * usage: to manually handle Referral Exclusion programmatically
 */

var { oCONFIG, _isExcludedReferrer } = require('../Universal-Federated-Analytics.lib.js');

var default_SUBDOMAIN_BASED = oCONFIG.SUBDOMAIN_BASED;
var default_COOKIE_DOMAIN = oCONFIG.COOKIE_DOMAIN;
var default_referrer = document.referrer;

beforeAll(() => {
  Object.defineProperty(document, 'referrer', { value: default_referrer, configurable: true, writable: true });
});

beforeEach(() => {
  oCONFIG.SUBDOMAIN_BASED = default_SUBDOMAIN_BASED;
  oCONFIG.COOKIE_DOMAIN = default_COOKIE_DOMAIN;
  document.referrer = default_referrer;
});

afterEach(() => {
  oCONFIG.SUBDOMAIN_BASED = default_SUBDOMAIN_BASED;
  oCONFIG.COOKIE_DOMAIN = default_COOKIE_DOMAIN;
  document.referrer = default_referrer;
});

test('_isExcludedReferrer: subdomain-based, not excluded', () => {
  document.referrer = 'https://www.google.com';
  oCONFIG.SUBDOMAIN_BASED = true;
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  expect(_isExcludedReferrer()).toBe(false);
});

test('_isExcludedReferrer: subdomain-based, is excluded', () => {
  document.referrer = 'https://login.usa.gov/';
  oCONFIG.SUBDOMAIN_BASED = true;
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  expect(_isExcludedReferrer()).toBe(true);
});

test('_isExcludedReferrer: not subdomain-based, not excluded', () => {
  document.referrer = 'https://www.usps.com/';
  oCONFIG.SUBDOMAIN_BASED = false;
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  expect(_isExcludedReferrer()).toBe(false);
});

test('_isExcludedReferrer: not subdomain-based, is excluded', () => {
  document.referrer = 'https://www.usa.gov/';
  oCONFIG.SUBDOMAIN_BASED = false;
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
  expect(_isExcludedReferrer()).toBe(true);
});
