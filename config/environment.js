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

    torii: {
      providers: {
        'github-oauth2': {
          scope: 'user:email,read:org,repo'
        }
      }
    },

    contentSecurityPolicy: {
      'script-src':  ["'self'"],
      'font-src':    ["'self'", "data:", "https://fonts.gstatic.com"],
      'connect-src': ["'self'", "http://localhost:3000", "https://as-lion-api.herokuapp.com", "https://as-lion-api-staging.herokuapp.com"],
      'img-src':     ["'self'", "https://avatars.githubusercontent.com"],
      'style-src':   ["'self'", "'unsafe-inline'", "https://use.fonticons.com", "https://fonts.googleapis.com"],
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiBaseUrl = 'http://localhost:3000/api/graph';
    ENV.apiAuthUrl = 'http://localhost:3000/api/auth';
    ENV.torii.providers['github-oauth2'].apiKey = '89b25efb23bf241601c0';
    ENV.torii.providers['github-oauth2'].redirectUri = 'http://localhost:4200/torii/redirect.html';
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

  if (environment === 'production') {
    ENV.apiBaseUrl = 'https://as-lion-api.herokuapp.com/api/graph';
    ENV.apiAuthUrl = 'https://as-lion-api.herokuapp.com/api/auth';
    ENV.torii.providers['github-oauth2'].apiKey = '743d8bfa4937e587f1f4';
    ENV.torii.providers['github-oauth2'].redirectUri = 'https://as-lion.herokuapp.com/torii/redirect.html';
  }

  if (environment === 'staging') {
    ENV.apiBaseUrl = 'https://as-lion-api-staging.herokuapp.com/api/graph';
    ENV.apiAuthUrl = 'https://as-lion-api-staging.herokuapp.com/api/auth';
    ENV.torii.providers['github-oauth2'].apiKey = 'b332ff88f7abf9bcdff5';
    ENV.torii.providers['github-oauth2'].redirectUri = 'https://as-lion-staging.herokuapp.com/torii/redirect.html';
  }

  return ENV;
};
