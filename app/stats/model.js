import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  count: attr('number'),
  user: belongsTo('user', { async: true })
});
