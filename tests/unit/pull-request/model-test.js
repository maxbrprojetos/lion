import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pull-request', 'Unit | Model | pull request', {
  needs: ['model:user']
});

test('should belong to a user', function(assert) {
  const PullRequest = this.store().modelFor('pull-request');
  const relationship = get(PullRequest, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user', 'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('it creates a github url', function(assert) {
  let model = this.subject({ name: 'emberjs/data', number: 34 });
  assert.equal(get(model, 'url'), 'https://github.com/emberjs/data/pull/34');
});
