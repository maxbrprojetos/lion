import Controller from '@ember/controller';
import { computed, get } from '@ember/object';

export default Controller.extend({
  queryParams: ['week'],

  scores: null,
  user: null,
  week: 0,

  nextWeek: computed('week', function() {
    return get(this, 'week') - 1;
  }),

  previousWeek: computed('week', function() {
    return get(this, 'week') + 1;
  }),

  totalScore: computed('scores.@each.points', function() {
    return get(this, 'scores').mapBy('points').reduce((a, b) => a + b, 0);
  }),
});
