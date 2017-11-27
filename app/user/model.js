import { get, computed } from '@ember/object';
import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  avatarUrl: attr('string'),
  name: attr('string'),
  nickname: attr('string'),

  githubUrl: computed('nickname', function() {
    return `https://github.com/${get(this, 'nickname')}`;
  })
});
