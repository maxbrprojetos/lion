import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:token', 'Unit | Adapter | token', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
