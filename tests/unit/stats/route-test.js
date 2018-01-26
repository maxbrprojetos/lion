import { moduleFor, test } from 'ember-qunit';

moduleFor('route:stats', 'Unit | Route | stats', {
  needs: ['service:apollo', 'service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
