import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('weekly-winning', 'Unit | Model | weekly winning', {
  needs: ['model:user']
});

test('should belong to a user', function(assert) {
  const WeeklyWinning = this.store().modelFor('weekly-winning');
  const relationship = get(WeeklyWinning, 'relationshipsByName').get('winner');

  assert.equal(relationship.key, 'winner', 'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
