import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default EmberObject.extend({
  open() {
    return new RSVP.Promise(function(resolve){
      resolve({ authorizationCode: 'secret' });
    });
  }
});
