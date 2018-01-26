import Route from '@ember/routing/route';
import { set } from '@ember/object';
import RouteQueryManager from "ember-apollo-client/mixins/route-query-manager";
import query from "lion/gql/queries/leaderboard";

export default Route.extend(RouteQueryManager, {
  model({ time_span: span }) {
    const variables = { span };
    return this.apollo.watchQuery({ query, variables }, 'scores');
  },

  setupController(controller, model) {
    set(controller, 'scores', model);
  }
});
