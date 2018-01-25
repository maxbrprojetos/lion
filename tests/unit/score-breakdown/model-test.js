import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('score-breakdown', 'Unit | Model | score breakdown', {
  needs: [
    'model:pull-request',
    'model:user',
  ]
});

test('should belong to a pull request', function(assert) {
  const ScoreBreakdown = this.store().modelFor('score-breakdown');
  const relationship = get(ScoreBreakdown, 'relationshipsByName').get('pullRequest');

  assert.equal(relationship.key, 'pullRequest', 'has relationship with pullRequest');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('should belong to a user', function(assert) {
  const ScoreBreakdown = this.store().modelFor('score-breakdown');
  const relationship = get(ScoreBreakdown, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user', 'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});

test('it has the correct type when it is for a review', function(assert) {
  let model = this.subject({ review: true });
  assert.equal(get(model, 'type'), 'Pull Request Review');
});

test('it has the correct type when it is not for a review', function(assert) {
  let model = this.subject({ review: false });
  assert.equal(get(model, 'type'), 'Pull Request');
});
