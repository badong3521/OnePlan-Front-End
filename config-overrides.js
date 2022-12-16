/* eslint-disable react-hooks/rules-of-hooks */
const { override, useBabelRc } = require('customize-cra');

module.exports = override(useBabelRc());
// enable legacy decorators babel plugin
