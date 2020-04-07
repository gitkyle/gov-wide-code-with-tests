/* name: _updateConfig
 * usage: to override default values of oConfig object.
 */

var { oCONFIG, _updateConfig } = require('../Universal-Federated-Analytics.lib.js');
var _cleanBooleanParam = jest.fn().mockReturnValue(true);
var _cleanDimensionValue = jest.fn().mockReturnValue('dimension1');

var default_SCRIPT_SOURCE = oCONFIG.SCRIPT_SOURCE;
var default_AGENCY = oCONFIG.AGENCY;
var default_SUB_AGENCY = oCONFIG.SUB_AGENCY;
var default_SITE_TOPIC = oCONFIG.SITE_TOPIC;
var default_SITE_PLATFORM = oCONFIG.SITE_PLATFORM;
var default_USE_PARALLEL_CUSTOM_DIMENSIONS = oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS;
var default_PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT;
var default_PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT = oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;
var default_COOKIE_TIMEOUT = oCONFIG.COOKIE_TIMEOUT;
var default_SEARCH_PARAMS = oCONFIG.SEARCH_PARAMS;
var default_EXTS = oCONFIG.EXTS;
var default_YOUTUBE = oCONFIG.YOUTUBE;
var default_AUTOTRACKER = oCONFIG.AUTOTRACKER;
var default_SUBDOMAIN_BASED = oCONFIG.SUBDOMAIN_BASED;
var default_DOUBLECLICK_LINK = oCONFIG.DOUBLECLICK_LINK;
var default_ENHANCED_LINK = oCONFIG.ENHANCED_LINK;
var default_OPTOUT_PAGE = oCONFIG.OPTOUT_PAGE;
var default_TRANSPORT = oCONFIG.TRANSPORT;

afterEach(() => {
  document.body.innerHTML = '';
  oCONFIG.SCRIPT_SOURCE = default_SCRIPT_SOURCE;
  oCONFIG.AGENCY = default_AGENCY;
  oCONFIG.SUB_AGENCY = default_SUB_AGENCY;
  oCONFIG.SITE_TOPIC = default_SITE_TOPIC;
  oCONFIG.SITE_PLATFORM = default_SITE_PLATFORM;
  oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS = default_USE_PARALLEL_CUSTOM_DIMENSIONS;
  oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT = default_PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT = default_PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT = default_PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT = default_PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT = default_PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT = default_PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT = default_PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT;
  oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT = default_PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT;
  oCONFIG.COOKIE_TIMEOUT = default_COOKIE_TIMEOUT;
  oCONFIG.SEARCH_PARAMS = default_SEARCH_PARAMS;
  oCONFIG.EXTS = default_EXTS;
  oCONFIG.YOUTUBE = default_YOUTUBE;
  oCONFIG.AUTOTRACKER = default_AUTOTRACKER;
  oCONFIG.SUBDOMAIN_BASED = default_SUBDOMAIN_BASED;
  oCONFIG.DOUBLECLICK_LINK = default_DOUBLECLICK_LINK;
  oCONFIG.ENHANCED_LINK = default_ENHANCED_LINK;
  oCONFIG.OPTOUT_PAGE = default_OPTOUT_PAGE;
  oCONFIG.TRANSPORT = default_TRANSPORT;
});

test('_updateConfig: agency only', () => {
  document.body.innerHTML =
    '<script type="text/javascript" id="_fed_an_ua_tag" src=" https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=USPS"></script>';
  _updateConfig(_cleanBooleanParam, _cleanDimensionValue);
  expect(oCONFIG.SCRIPT_SOURCE).toBe('https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js');
  expect(oCONFIG.AGENCY).toBe('USPS');
});

test('_updateConfig: all params', () => {
  document.body.innerHTML =
    '<script type="text/javascript" id="_fed_an_ua_tag" src=" https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=USPS&subagency=PaperBoy&sitetopic=morningPaper&siteplatform=mailDelivery&parallelcd=true&palagencydim=1&palsubagencydim=1&palversiondim=1&paltopicdim=1&palplatformdim=1&palscriptsrcdim=1&palurlprotocoldim=1&palinteractiontypedim=1&cto=60&sp=first,second&exts=first,second&yt=true&autotracker=true&sdor=true&dclink=true&enhlink=true&optout=true&transport=beacon"></script>';
  _updateConfig(_cleanBooleanParam, _cleanDimensionValue);
  expect(_cleanBooleanParam.mock.calls.length).toBe(7);
  expect(_cleanDimensionValue.mock.calls.length).toBe(8);
  expect(oCONFIG.SCRIPT_SOURCE).toBe('https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js');
  expect(oCONFIG.AGENCY).toBe('USPS');
  expect(oCONFIG.SUB_AGENCY).toBe('PAPERBOY');
  expect(oCONFIG.SITE_TOPIC).toBe('morningpaper');
  expect(oCONFIG.SITE_PLATFORM).toBe('maildelivery');
  expect(oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS).toBe(true);
  expect(oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT).toBe('dimension1');
  expect(oCONFIG.COOKIE_TIMEOUT).toBe(157680000);
  expect(oCONFIG.SEARCH_PARAMS).toBe('q|querytext|nasaInclude|k|qt|first|second');
  expect(oCONFIG.EXTS).toBe(
    'doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar|first|second'
  );
  expect(oCONFIG.YOUTUBE).toBe(true);
  expect(oCONFIG.AUTOTRACKER).toBe(true);
  expect(oCONFIG.SUBDOMAIN_BASED).toBe(true);
  expect(oCONFIG.DOUBLECLICK_LINK).toBe(true);
  expect(oCONFIG.ENHANCED_LINK).toBe(true);
  expect(oCONFIG.OPTOUT_PAGE).toBe(true);
  expect(oCONFIG.TRANSPORT).toBe('beacon');
});
