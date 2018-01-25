import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  createdAt: attr('date'),
  points: attr('number'),
  pullRequest: belongsTo('pull-request', { async: false }),
  review: attr('boolean'),
  user: belongsTo('user', { async: false }),

  type: computed('review', function() {
    return get(this, 'review') ? 'Pull Request Review' : 'Pull Request'
  }),
});
