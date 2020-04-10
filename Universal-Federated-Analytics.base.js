var {
  _updateConfig,
  _defineCookieDomain,
  _defineAgencyCDsValues,
  gas,
  initTrackers,
  _initBasicTracker,
  createTracker,
  createYouTubeIFrames,
} = require('./Universal-Federated-Analytics.lib.js');

// Order matters
_updateConfig();
_defineCookieDomain();
_defineAgencyCDsValues();

createYouTubeIFrames();
_initBasicTracker();
createTracker(true);
initTrackers();

// globally accessible functions
window['gas'] = gas;
