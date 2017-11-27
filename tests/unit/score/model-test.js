import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('score', 'Unit | Model | score', {
  needs: ['model:user']
});

test('should belong to a user', function(assert) {
  const Score = this.store().modelFor('score');
  const relationship = get(Score, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user', 'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
