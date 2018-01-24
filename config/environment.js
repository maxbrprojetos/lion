/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lion',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    apiBaseUrl: process.env.API_BASE_URL,
    apiAuthUrl: process.env.API_AUTH_URL,

    torii: {
      providers: {
        'github-oauth2': {
          apiKey: process.env.GITHUB_API_KEY,
          redirectUri: process.env.GITHUB_REDIRECT_URI,
          scope: 'user:email,read:org,repo'
        }
      }
    },

    contentSecurityPolicy: {
      'script-src':  ["'self'"],
      'font-src':    ["'self'", "data:", "https://fonts.gstatic.com"],
      'connect-src': ["'self'", "http://localhost:3000", "https://lion-api.alphasights.com"],
      'img-src':     ["'self'", "https://avatars.githubusercontent.com"],
      'style-src':   ["'self'", "'unsafe-inline'", "https://use.fonticons.com", "https://fonts.googleapis.com"],
    }
  };

  ENV.usingGithubAuth = !!ENV.torii.providers['github-oauth2'].apiKey;

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.apiBaseUrl = '/api/graph';
    ENV.apiAuthUrl = '/api/auth';
  }

  return ENV;
};
