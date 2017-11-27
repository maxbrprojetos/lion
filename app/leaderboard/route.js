import Route from '@ember/routing/route';
import { set, get } from '@ember/object';

export default Route.extend({
  model({ time_span }) {
    return get(this, 'store').query('score', { time_span });
  },

  setupController(controller, model) {
    set(controller, 'scores', model);
  }
});
