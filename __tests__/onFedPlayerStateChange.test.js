/*
 * name: onFedPlayerStateChange
 * usage: fired when user interacts with the video player
 * such as pressing play/pause buttons
 * and sends proper Events to GA
 */

jest.useFakeTimers();

var { onFedPlayerStateChange } = require('../Universal-Federated-Analytics.lib.js');

test('onFedPlayerStateChange: Play and Progress events', () => {
  var mock_sendEvent = jest.fn();
  var mock_onPlayerStateChange = jest.fn();
  window['YT'] = { PlayerState: { PLAYING: 1 } };
  document.body.innerHTML =
    '<div><iframe width="560" height="315" src="https://www.youtube.com/embed/XYmBLVtJhZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  var ytEvent = {
    target: {
      getCurrentTime: jest.fn().mockReturnValue(0),
      getDuration: jest.fn().mockReturnValue(100),
      getIframe: jest
        .fn()
        .mockReturnValue({ getAttribute: jest.fn().mockReturnValue('https://www.youtube.com/embed/XYmBLVtJhZE') }),
    },
    data: 1,
  };

  onFedPlayerStateChange(ytEvent, mock_sendEvent);

  expect(mock_onPlayerStateChange.mock.calls.length).toBe(0);

  // Initial play event
  expect(mock_sendEvent.mock.calls.length).toBe(1);
  expect(mock_sendEvent.mock.calls[0][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[0][1]).toBe('play');
  expect(mock_sendEvent.mock.calls[0][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[0][3]).toBe(0);

  // Progress events
  expect(setInterval).toHaveBeenCalledTimes(1);

  // 25% elapsed
  ytEvent.target.getCurrentTime.mockReturnValue(26);
  jest.advanceTimersByTime(1500);
  expect(mock_sendEvent.mock.calls.length).toBe(2);
  expect(mock_sendEvent.mock.calls[1][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[1][1]).toBe('25%');
  expect(mock_sendEvent.mock.calls[1][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[1][3]).toBe(0);

  // 50% elapsed
  ytEvent.target.getCurrentTime.mockReturnValue(51);
  jest.advanceTimersByTime(1500);
  expect(mock_sendEvent.mock.calls.length).toBe(3);
  expect(mock_sendEvent.mock.calls[2][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[2][1]).toBe('50%');
  expect(mock_sendEvent.mock.calls[2][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[2][3]).toBe(0);

  // 75% elapsed
  ytEvent.target.getCurrentTime.mockReturnValue(76);
  jest.advanceTimersByTime(1500);
  expect(mock_sendEvent.mock.calls.length).toBe(4);
  expect(mock_sendEvent.mock.calls[3][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[3][1]).toBe('75%');
  expect(mock_sendEvent.mock.calls[3][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[3][3]).toBe(0);

  // 95% elapsed
  ytEvent.target.getCurrentTime.mockReturnValue(96);
  jest.advanceTimersByTime(1500);
  expect(mock_sendEvent.mock.calls.length).toBe(5);
  expect(mock_sendEvent.mock.calls[4][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[4][1]).toBe('95%');
  expect(mock_sendEvent.mock.calls[4][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[4][3]).toBe(0);
});

test('onFedPlayerStateChange: Pause', () => {
  var mock_sendEvent = jest.fn();
  var mock_onPlayerStateChange = jest.fn();
  window['YT'] = { PlayerState: { ENDED: 0, PLAYING: 1, PAUSED: 2 } };
  document.body.innerHTML =
    '<div><iframe width="560" height="315" src="https://www.youtube.com/embed/XYmBLVtJhZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  var ytEvent = {
    target: {
      getCurrentTime: jest.fn().mockReturnValue(0),
      getDuration: jest.fn().mockReturnValue(100),
      getIframe: jest
        .fn()
        .mockReturnValue({ getAttribute: jest.fn().mockReturnValue('https://www.youtube.com/embed/XYmBLVtJhZE') }),
    },
    data: 2,
  };

  onFedPlayerStateChange(ytEvent, mock_sendEvent);

  expect(mock_onPlayerStateChange.mock.calls.length).toBe(0);

  expect(mock_sendEvent.mock.calls.length).toBe(1);
  expect(mock_sendEvent.mock.calls[0][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[0][1]).toBe('pause');
  expect(mock_sendEvent.mock.calls[0][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[0][3]).toBe(0);
});

test('onFedPlayerStateChange: Finish', () => {
  var mock_sendEvent = jest.fn();
  var mock_onPlayerStateChange = jest.fn();
  window['YT'] = { PlayerState: { ENDED: 0, PLAYING: 1, PAUSED: 2 } };
  document.body.innerHTML =
    '<div><iframe width="560" height="315" src="https://www.youtube.com/embed/XYmBLVtJhZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  var ytEvent = {
    target: {
      getCurrentTime: jest.fn().mockReturnValue(0),
      getDuration: jest.fn().mockReturnValue(100),
      getIframe: jest
        .fn()
        .mockReturnValue({ getAttribute: jest.fn().mockReturnValue('https://www.youtube.com/embed/XYmBLVtJhZE') }),
    },
    data: 0,
  };

  onFedPlayerStateChange(ytEvent, mock_sendEvent);

  expect(mock_onPlayerStateChange.mock.calls.length).toBe(0);

  expect(mock_sendEvent.mock.calls.length).toBe(1);
  expect(mock_sendEvent.mock.calls[0][0]).toBe('YouTube Video');
  expect(mock_sendEvent.mock.calls[0][1]).toBe('finish');
  expect(mock_sendEvent.mock.calls[0][2]).toBe('https://www.youtube.com/embed/XYmBLVtJhZE');
  expect(mock_sendEvent.mock.calls[0][3]).toBe(0);
});
