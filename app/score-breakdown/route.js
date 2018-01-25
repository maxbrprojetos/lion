import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
  queryParams: {
    week: {
      refreshModel: true
    }
  },

  model(params) {
    return get(this, 'store').query('score-breakdown', params);
  },

  setupController(controller, model) {
    set(controller, 'scores', model);
    const { user_id } = this.paramsFor('score-breakdown');
    set(controller, 'user', get(this, 'store').peekRecord('user', user_id));
  },
});
