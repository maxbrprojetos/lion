import { oneWay } from '@ember/object/computed';
import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';

export default TooltipsterComponent.extend({
  attributeBindings: ['src', 'alt', 'title'],
  classNameBindings: [':user-avatar'],
  tagName: 'img',

  user: null,

  alt: oneWay('title'),
  src: oneWay('user.avatarUrl'),
  title: oneWay('user.name'),
});
