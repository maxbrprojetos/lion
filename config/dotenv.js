/* eslint-env node */

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: [
      'API_BASE_URL',
      'API_AUTH_URL',
      'GITHUB_API_KEY',
      'GITHUB_REDIRECT_URI',
    ]
  };
};
