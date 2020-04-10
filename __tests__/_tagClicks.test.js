/*
 * name: _tagClicks
 * usage:
 * add event listener to an HTML element
 */

var { _tagClicks } = require('../Universal-Federated-Analytics.lib.js');

test('_tagClicks: evObj has addEventListener', () => {
  var mock_sendEvent = jest.fn();
  var mock_addEventListener = jest.fn();
  var mock_attachEvent = jest.fn();

  var evObj = { addEventListener: mock_addEventListener, attachEvent: undefined };
  var evCat = 'cat';
  var evAct = 'act';
  var evLbl = 'lbl';
  var evVal = 'val';

  _tagClicks(evObj, evCat, evAct, evLbl, evVal, mock_sendEvent);

  expect(mock_sendEvent.mock.calls.length).toBe(0);
  expect(mock_addEventListener.mock.calls.length).toBe(2);
  expect(mock_attachEvent.mock.calls.length).toBe(0);
});

test('_tagClicks: evObj has attachEvent', () => {
  var mock_sendEvent = jest.fn();
  var mock_addEventListener = jest.fn();
  var mock_attachEvent = jest.fn();

  var evObj = { addEventListener: undefined, attachEvent: mock_attachEvent };
  var evCat = 'cat';
  var evAct = 'act';
  var evLbl = 'lbl';
  var evVal = 'val';

  _tagClicks(evObj, evCat, evAct, evLbl, evVal, mock_sendEvent);

  expect(mock_sendEvent.mock.calls.length).toBe(0);
  expect(mock_addEventListener.mock.calls.length).toBe(0);
  expect(mock_attachEvent.mock.calls.length).toBe(2);
});
