import { get } from '@ember/object';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:stats', 'Unit | Controller | stats', {
  needs: []
});

test('it sorts the stats in descending order of count', function(assert) {
  assert.expect(1);

  let controller = this.subject({
    model: [
      { id: '1', count: 125 },
      { id: '2', count: 25 },
      { id: '3', count: 625 },
    ]
  });
  assert.deepEqual(
    get(controller, 'categoryStats'),
    [
      { id: '3', count: 625 },
      { id: '1', count: 125 },
      { id: '2', count: 25 },
    ]
  );
});
