import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['user-performance'],
  classNameBindings: ['linkable'],
  router: service(),

  user: null,
  linkable: false,
  points: 0,

  url: computed('user.id', function() {
    return get(this, 'router').urlFor('score-breakdown', get(this, 'user.id'));
  }),

  click() {
    if (get(this, 'linkable')) {
      get(this, 'router').transitionTo(get(this, 'url'));
    }
  },
});
