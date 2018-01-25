import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:score-breakdown', 'Unit | Controller | score breakdown', {
  needs: []
});

test('#previousWeek is calculated correctly', function(assert) {
  assert.expect(1);

  let controller = this.subject();

  controller.set('week', 1);
  assert.equal(controller.get('previousWeek'), 2, 'should increment the week counter');
});

test('#nextWeek is calculated correctly', function(assert) {
  assert.expect(1);

  let controller = this.subject();

  controller.set('week', 1);
  assert.equal(controller.get('nextWeek'), 0, 'should decrement the week counter');
});

test('#totalScore is calculated correctly', function(assert) {
  assert.expect(1);

  let controller = this.subject();

  controller.set('scores', [
    { points: 10 },
    { points: 5 }
  ]);
  assert.equal(controller.get('totalScore'), 15, 'should sum up all the points');
});
