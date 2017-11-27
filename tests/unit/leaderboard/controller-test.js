import { get } from '@ember/object';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:leaderboard', 'Unit | Controller | leaderboard', {
  needs: []
});

test('it sorts the scores in descending order of points', function(assert) {
  assert.expect(1);

  let controller = this.subject({
    scores: [
      { points: 125 },
      { points: 25 },
      { points: 625 },
    ]
  });
  assert.deepEqual(
    get(controller, 'arrangedScores'),
    [
      { points: 625 },
      { points: 125 },
      { points: 25 },
    ]
  );
});
