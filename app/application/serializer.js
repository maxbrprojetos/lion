import { get } from '@ember/object';
import { underscore } from '@ember/string';
import { Serializer } from 'ember-graphql-adapter';

export default Serializer.extend({
  concatenatedProperties: [
    'attributesExcludedFromSerialization',
    'belongsToExcludedFromSerialization',
    'hasManyExcludedFromSerialization'
  ],
  attributesExcludedFromSerialization: [],
  belongsToExcludedFromSerialization: [],
  hasManyExcludedFromSerialization: [],

  normalizeCase(string) {
    return underscore(string);
  },

  serializeAttribute(snapshot, json, key, attribute) {
    if (!get(this, 'attributesExcludedFromSerialization').includes(attribute.name)) {
      this._super(snapshot, json, key, attribute);
    }
  },

  serializeBelongsTo(snapshot, json, relationship) {
    if (!get(this, 'belongsToExcludedFromSerialization').includes(relationship.key)) {
      this._super(snapshot, json, relationship);
    }
  },

  serializeHasMany(snapshot, json, relationship) {
    if (!get(this, 'hasManyExcludedFromSerialization').includes(relationship.key)) {
      this._super(snapshot, json, relationship);
    }
  },
});
