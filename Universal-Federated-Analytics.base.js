var {
  _updateConfig,
  _defineCookieDomain,
  _defineAgencyCDsValues,
  _setupYtTrackers,
  gas,
  initTrackers
} = require('./Universal-Federated-Analytics.lib.js');

// Populate settings gathered from the Federated tag parameters to the configuration array and trackers
// The order of the following 3 functions matters:
_updateConfig();
_defineCookieDomain();
_defineAgencyCDsValues();

_initBasicTracker();
createTracker(true);
_setupYtTrackers();
initTrackers();

// globally accessible functions
window['gas'] = gas;
