import { moduleFor, test } from 'ember-qunit';

moduleFor('route:score-breakdown', 'Unit | Route | score breakdown', {
  needs: ['service:apollo','service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
