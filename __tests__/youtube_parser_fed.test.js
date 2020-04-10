/*
 * name: youtube_parser_fed
 * usage: to extract YouTube video id from YouTube URI
 */
var { youtube_parser_fed } = require('../Universal-Federated-Analytics.lib.js');

test('youtube_parser_fed: valid YouTube URL', () => {
  var url = 'https://www.youtube.com/embed/XYmBLVtJhZE';
  expect(youtube_parser_fed(url)).toBe('XYmBLVtJhZE');
});
