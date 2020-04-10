/*
 * name: _initIdAssigner
 * usage: assign unique Id to HTML elements without any id.
 * useful for Enhanced Link Attribution
 */

var { _initIdAssigner } = require('../Universal-Federated-Analytics.lib.js');

test('_initIdAssigner: one <a> tag', () => {
  document.body.innerHTML = '<div><a></a></div>';
  _initIdAssigner();
  expect(document.getElementById('anch_0') != null).toBe(true);
  expect(document.getElementById('anch_1') != null).toBe(false);
});

test('_initIdAssigner: two <a> tags', () => {
  document.body.innerHTML = '<div><a></a><a></a></div>';
  _initIdAssigner();
  expect(document.getElementById('anch_0') != null).toBe(true);
  expect(document.getElementById('anch_1') != null).toBe(true);
});
