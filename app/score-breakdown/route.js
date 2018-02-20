import Route from '@ember/routing/route';
import { set } from '@ember/object';
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
    set(controller, 'scores', model.scores);

    delete model.scores
    set(controller, 'user', model);
  },
});
