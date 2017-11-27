import { sort } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  model: null,

  categoryStats: sort('model', '_countSorting'),

  _countSorting: ['count:desc']
});
