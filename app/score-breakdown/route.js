import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';
import { get, set } from '@ember/object';
import RouteQueryManager from "ember-apollo-client/mixins/route-query-manager";
import scoreBreakdownQuery from "lion/gql/queries/score-breakdowns";

export default Route.extend(RouteQueryManager, {
  queryParams: {
    week: {
      refreshModel: true
    }
  },

  model(params) {
    return this.apollo.watchQuery({ query: scoreBreakdownQuery, variables: params }, 'scoreBreakdowns');
  },

  setupController(controller, model) {
    set(controller, 'scores', model);

    if (isEmpty(get(controller, 'user'))) {
      const users = model.mapBy('user');
      const { user_id } = this.paramsFor('score-breakdown');
      set(controller, 'user', users.findBy('id', user_id));
    }
  },
});
