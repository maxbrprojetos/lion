import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  session: service(),

  actions: {
    authenticateWithGithub() {
      get(this, 'session').authenticate('authenticator:oauth2', 'github-oauth2');
    }
  }
});
