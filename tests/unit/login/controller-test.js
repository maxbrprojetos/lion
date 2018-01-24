import { run } from '@ember/runloop';
import Service from '@ember/service';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:login', 'Unit | Controller | login', {
  needs: ['service:session']
});

test('it calls authenticate with the right arguments', function(assert) {
  assert.expect(2);

  const sessionStub = Service.create({
    authenticate(authenticator, provider) {
      assert.equal(
        authenticator,
        'authenticator:oauth2',
        'expected to authenticate using the oauth2 authenticator'
      );
      assert.equal(
        provider,
        'dev',
        'expected to authenticate via the specified provider'
      );
    }
  });

  let controller = this.subject();
  controller.session = sessionStub;

  run(() => {
    controller.send('authenticate', 'dev');
  });
});
