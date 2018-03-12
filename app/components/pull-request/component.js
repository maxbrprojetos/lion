import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['pull-request'],

  router: service(),

  pullRequest: null,

  additions: alias('pullRequest.additions'),
  deletions: alias('pullRequest.deletions'),
  number: alias('pullRequest.number'),
  points: alias('pullRequest.score.points'),
  title: alias('pullRequest.title'),
  user: alias('pullRequest.user'),

  breakdownUrl: computed('user.id', function() {
    return get(this, 'router').urlFor('score-breakdown', get(this, 'user.id'));
  }),
  repo: computed('pullRequest.name', function() {
    const fullName = get(this, 'pullRequest.name');
    const match = fullName.match('[a-z]+$');

    return match.pop();
  }),
});
