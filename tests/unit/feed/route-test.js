import { moduleFor, test } from 'ember-qunit';

moduleFor('route:feed', 'Unit | Route | feed', {
  needs: ['service:apollo', 'service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
