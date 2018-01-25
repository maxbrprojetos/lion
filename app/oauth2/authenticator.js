import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import RSVP from 'rsvp';
import Authenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';
import mutation from 'lion/mutations/token-create';

export default Authenticator.extend({
  auth: service(),
  torii: service(),

  refreshAccessTokens: false,

  authenticate(provider) {
    return this._fetchOauthData(provider).then(code => {
      const variables = { code };
      return get(this, 'auth').mutate({ mutation, variables }, 'token').then(response => {
        let data = {};
        const accessToken = get(response, 'accessToken');
        const expiresIn = get(response, 'expiresIn');
        const expiresAt = this._absolutizeExpirationTime(expiresIn);
        this._scheduleAccessTokenRefresh(expiresIn, expiresAt);
        if (!isEmpty(expiresAt)) {
          data = {
            'access_token': accessToken,
            'expires_at': expiresAt,
            'expires_in': expiresIn
          };
        }

        return RSVP.Promise.resolve(data);
      }).catch(error => {
        return RSVP.Promise.reject(error);
      });
    });
  },

  _fetchOauthData(provider) {
    return new RSVP.Promise((resolve, reject) => {
      get(this, 'torii').open(provider).then(oauthData => {
        resolve(oauthData.authorizationCode);
      }).catch(error => {
        reject(error);
      });
    });
  }
});
