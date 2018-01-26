import { moduleFor, test } from 'ember-qunit';

moduleFor('route:hall-of-fame', 'Unit | Route | hall of fame', {
  needs: ['service:apollo', 'service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
