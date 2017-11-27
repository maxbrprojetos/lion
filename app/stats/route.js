import { get } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  model({ category }) {
    return get(this, 'store').query('stats', { category });
  }
});
