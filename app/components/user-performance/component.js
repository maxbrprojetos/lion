import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['user-performance'],
  classNameBindings: ['linkable', 'isNew:new:'],
  router: service(),

  user: null,
  linkable: false,
  isNew: false,
  points: 0,

  resetNew: function() {
    Ember.run.later(() => {
      set(this, 'isNew', false);
    }, 1000);
  }.on('didUpdateAttrs'),

  url: computed('user.id', function() {
    return get(this, 'router').urlFor('score-breakdown', get(this, 'user.id'));
  }),

  click() {
    if (get(this, 'linkable')) {
      get(this, 'router').transitionTo(get(this, 'url'));
    }
  },
});
