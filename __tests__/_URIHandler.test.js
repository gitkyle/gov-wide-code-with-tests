/* name: _URIHandler
 * usage: to unify parameter name of search to be passed to GA
 */

var { _URIHandler } = require('../Universal-Federated-Analytics.lib.js');

test('_URIHandler: no matching search params', () => {
  var pageName = '/store/shirt-blue?size=large#details';
  expect(_URIHandler(pageName)).toBe('/store/shirt-blue?size=large#details');
});

test('_URIHandler: match search param "q"', () => {
  var pageName = '/store/search?q=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts');
});

test('_URIHandler: match search param "querytext"', () => {
  var pageName = '/store/search?querytext=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts');
});

test('_URIHandler: match search param "nasaInclude"', () => {
  var pageName = '/store/search?nasaInclude=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts');
});

test('_URIHandler: match search param "k"', () => {
  var pageName = '/store/search?k=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts');
});

test('_URIHandler: match search param "qt"', () => {
  var pageName = '/store/search?qt=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts');
});

test('_URIHandler: replace only the first instance of a search param with "query"', () => {
  var pageName = '/store/search?q=shirts&qt=blue#details';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts&qt=blue#details');
});

test('_URIHandler: replace search param when it is not the first query param', () => {
  var pageName = '/store/search?page=5&querytext=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?page=5&query=shirts');
});

test('_URIHandler: ignore case when matching search param', () => {
  var pageName = '/store/search?NaSaInClUdE=shirts';
  expect(_URIHandler(pageName)).toBe('/store/search?query=shirts');
});
