import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  additions: attr('number'),
  deletions: attr('number'),
  name: attr('string'),
  number: attr('number'),
  user: belongsTo('user', { async: false }),

  url: computed('name', 'number', function() {
    return `https://github.com/${get(this, 'name')}/pull/${get(this, 'number')}`;
  }),
});
