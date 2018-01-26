import Route from '@ember/routing/route';
import RouteQueryManager from "ember-apollo-client/mixins/route-query-manager";
import query from "lion/gql/queries/stats";

export default Route.extend(RouteQueryManager, {
  model({ category: category }) {
    const variables = { category };
    return this.apollo.watchQuery({ query, variables }, 'stats');
  }
});
