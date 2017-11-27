import { set } from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-avatar', 'Integration | Component | user avatar', {
  integration: true
});

test('it renders', function(assert) {
  let avatarUrl = 'http://placeholder.it/350x350';
  let name = 'John Smith';
  set(this, 'user', { avatarUrl, name });

  this.render(hbs`{{user-avatar user=user}}`);

  assert.equal(
    this.$('.user-avatar').attr('alt'),
    'John Smith',
    `user's name is used as the img's alt property`
  );

  assert.equal(
    this.$('.user-avatar').attr('src'),
    'http://placeholder.it/350x350',
    `user's avatarUrl is used as the img's src`
  );
});
