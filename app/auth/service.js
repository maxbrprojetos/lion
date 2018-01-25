import Service from 'ember-apollo-client/services/apollo';
import config from 'lion/config/environment';

export default Service.extend({
  options: {
    apiURL: config.apiAuthUrl
  }
});
