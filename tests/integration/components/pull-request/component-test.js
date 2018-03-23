import { set } from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pull-request', 'Integration | Component | pull request', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);
  const user = {
    avatarUrl: 'http://placeholder.it/350x350',
    nickname: 'John Smith'
  };
  const score = { points: 50 };
  const pullRequest = {
    additions: 200,
    deletions: 300,
    name: 'Lion',
    number: 12,
    title: 'Added PR Feed',
    score: score,
    user: user
  };
  set(this, 'pullRequest', pullRequest);
  this.render(hbs`{{pull-request pullRequest=pullRequest}}`);

  assert.equal(this.$('.summary').text().trim(), 'John Smith merged Added PR Feed.');
  assert.equal(this.$('.number--points').text().trim(), '50');
  assert.equal(this.$('.number--additions').text().trim(), '+ 200');
  assert.equal(this.$('.number--deletions').text().trim(), '- 300');
});
