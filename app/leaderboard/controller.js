import { sort } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  scores: null,
  arrangedScores: sort('scores', '_scoresSorting'),

  _scoresSorting: ['points:desc']
});
