import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { get } from '@ember/object';
import config from 'lion/config/environment';

export default Controller.extend({
  session: service(),

  usingGithubAuth: config.usingGithubAuth,

  actions: {
    authenticate(provider) {
      get(this, 'session').authenticate('authenticator:oauth2', provider);
    }
  }
});
