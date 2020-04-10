/*
 * name: YTUrlHandler_fed
 * usage: to correct minor errors in YouTube URLs
 */
var { YTUrlHandler_fed } = require('../Universal-Federated-Analytics.lib.js');

test('YTUrlHandler_fed: complete YouTube URL', () => {
  var url = 'https://www.youtube.com/embed/XYmBLVtJhZE?flag=1&enablejsapi=1&html5=1&origin=localhost';
  var result = YTUrlHandler_fed(url);
  expect(result).toBe(url);
});

test('YTUrlHandler_fed: non-https URL', () => {
  var url = 'http://www.youtube.com/embed/XYmBLVtJhZE?flag=1&enablejsapi=1&html5=1&origin=localhost';
  var result = YTUrlHandler_fed(url);
  expect(result).toBe('https://www.youtube.com/embed/XYmBLVtJhZE?flag=1&enablejsapi=1&html5=1&origin=localhost');
});

test('YTUrlHandler_fed: missing all query string parameters', () => {
  var url = 'https://www.youtube.com/embed/XYmBLVtJhZE';
  var result = YTUrlHandler_fed(url).split('?');
  var pattern = /^flag=1&enablejsapi=1&html5=1&origin=.*?$/;
  var queryStringTest = pattern.test(result[1]);
  expect(result[0]).toBe(url);
  expect(queryStringTest).toBe(true);
});
