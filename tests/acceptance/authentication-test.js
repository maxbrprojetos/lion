import { test } from 'qunit';
import moduleForAcceptance from 'lion/tests/helpers/module-for-acceptance';
import {
  authenticateSession,
  invalidateSession
} from 'lion/tests/helpers/ember-simple-auth';
import startApp from 'lion/tests/helpers/start-app';
import destroyApp from 'lion/tests/helpers/destroy-app';
import fetchMock from 'lion/helpers/fetch-mock';

let application;

moduleForAcceptance('Acceptance | authentication', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    fetchMock.restore();
    destroyApp(application);
  }
});

test('visiting the app while logged in', function(assert) {
  fetchMock.post('/api/graph', { data: { scores: [] } });

  authenticateSession(application);

  visit('/');

  andThen(function() {
    assert.equal(
      currentURL(),
      '/leaderboard/weekly',
      'redirects to the leaderboard page'
    );
  });
});

test('visiting the app while logged out', function(assert) {
  invalidateSession(application);

  visit('/');

  andThen(function() {
    assert.equal(
      currentURL(),
      '/login',
      'redirects to the login page'
    );
  });
});
