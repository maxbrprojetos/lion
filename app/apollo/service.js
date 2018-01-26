import Service from 'ember-apollo-client/services/apollo';
import middlewares from 'ember-apollo-client/utils/middlewares';
import config from 'lion/config/environment';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Service.extend({
  options: {
    apiURL: config.apiBaseUrl
  },

  middlewares: middlewares('authorize'),

  session: service(),
  authorizer: 'authorizer:oauth2',

  authorize(req, next) {
    const authorizer = get(this, 'authorizer');
    if (!req.options.headers) {
      req.options.headers = {};
    }

    get(this, 'session').authorize(authorizer, (headerName, headerValue) => {
      req.options.headers[headerName] = headerValue;
    })
    next();
  }
});
