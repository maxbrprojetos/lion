import { get } from '@ember/object';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('token', 'Unit | Model | token', {
  needs: ['model:user']
});

test('should belong to a user', function(assert) {
  const Token = this.store().modelFor('token');
  const relationship = get(Token, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user', 'has relationship with user');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
