import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('stats', 'Unit | Model | stats', {
  needs: ['model:user']
});

test('should belong to a user', function(assert) {
  const Stats = this.store().modelFor('stats');
  const relationship = get(Stats, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user', 'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
