import { set } from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-performance', 'Integration | Component | user performance', {
  integration: true
});

test('it renders', function(assert) {
  set(this, 'points', 150);
  set(this, 'user', { nickname: 'smithey' });

  this.render(hbs`{{user-performance user=user points=points}}`);

  assert.equal(
    this.$('.user-performance .nickname').text().trim(),
    'smithey',
    `user's nickname is shown`
  );

  assert.equal(
    this.$('.user-performance .points').text().trim(),
    '150',
    `points value is shown`
  );
});
