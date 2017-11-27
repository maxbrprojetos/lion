import { get } from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return get(this, 'store').findAll('weeklyWinning');
  }
});
