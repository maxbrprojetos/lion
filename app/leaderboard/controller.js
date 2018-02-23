import { sort } from '@ember/object/computed';
import Controller from '@ember/controller';
import config from 'lion/config/environment';
import { get, setProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  cable: service(),

  scores: null,
  arrangedScores: sort('scores', '_scoresSorting'),

  setupConsumer: function() {
    const consumer = this.get('cable').createConsumer(config.webSocketUrl);

    const subscription = consumer.subscriptions.create('LeaderboardChannel', {
      connected: () => {
        console.log("Connected to LeaderboardChannel");
      },
      received: (data) => {
        this.updateScore(data);
      }
    });
  }.on('init'),

  updateScore: function(data) {
    const scores = get(this, 'scores');
    const updatedScore = scores.findBy('user.id', data.user_id);

    setProperties(updatedScore, {
      points: data.points,
      isNew: true
    });
  },
  _scoresSorting: ['points:desc']
});
