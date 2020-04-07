/* name: _defineAgencyCDsValues
 * usage: to define the values of AGENCY, SUB_AGENCY, SITE_TOPIC and SITE_PLATFORM Custom dimensions
 */

var { oCONFIG, _defineAgencyCDsValues } = require('../Universal-Federated-Analytics.lib.js');

var default_AGENCY = oCONFIG.AGENCY;
var default_SUB_AGENCY = oCONFIG.SUB_AGENCY;
var default_SITE_TOPIC = oCONFIG.SITE_TOPIC;
var default_SITE_PLATFORM = oCONFIG.SITE_PLATFORM;

beforeEach(() => {
  oCONFIG.COOKIE_DOMAIN = 'usa.gov';
});

afterEach(() => {
  oCONFIG.AGENCY = default_AGENCY;
  oCONFIG.SUB_AGENCY = default_SUB_AGENCY;
  oCONFIG.SITE_TOPIC = default_SITE_TOPIC;
  oCONFIG.SITE_PLATFORM = default_SITE_PLATFORM;
});

test('_defineAgencyCDsValues: all specified', () => {
  oCONFIG.AGENCY = 'USPS';
  oCONFIG.SUB_AGENCY = 'Paper Boy';
  oCONFIG.SITE_TOPIC = 'Morning Newspaper';
  oCONFIG.SITE_PLATFORM = 'Mail Delivery';
  _defineAgencyCDsValues();
  expect(oCONFIG.AGENCY).toBe('USPS');
  expect(oCONFIG.SUB_AGENCY).toBe('USPS - Paper Boy');
  expect(oCONFIG.SITE_TOPIC).toBe('Morning Newspaper');
  expect(oCONFIG.SITE_PLATFORM).toBe('Mail Delivery');
});

test('_defineAgencyCDsValues: all unspecified', () => {
  _defineAgencyCDsValues();
  expect(oCONFIG.AGENCY).toBe('unspecified:usa.gov');
  expect(oCONFIG.SUB_AGENCY).toBe('unspecified:usa.gov - usa.gov');
  expect(oCONFIG.SITE_TOPIC).toBe('unspecified:usa.gov');
  expect(oCONFIG.SITE_PLATFORM).toBe('unspecified:usa.gov');
});
