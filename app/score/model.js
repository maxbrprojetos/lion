import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  points: attr('number'),
  user: belongsTo('user', { async: true })
});
