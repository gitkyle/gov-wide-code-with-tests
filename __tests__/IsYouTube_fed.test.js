/*
 * name: IsYouTube_fed
 * usage: to check if the string is a valid YouTube URL
 */
var { IsYouTube_fed } = require('../Universal-Federated-Analytics.lib.js');

test('IsYouTube_fed: valid YouTube URL', () => {
  var url = 'https://www.youtube.com/embed/XYmBLVtJhZE';
  expect(IsYouTube_fed(url)).toBe(true);
});

test('IsYouTube_fed: invalid YouTube URL', () => {
  var url = 'https://www.google.com/';
  expect(IsYouTube_fed(url)).toBe(false);
});
