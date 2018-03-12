import Route from '@ember/routing/route';
import { set } from '@ember/object';
import RouteQueryManager from "ember-apollo-client/mixins/route-query-manager";
import query from "lion/gql/queries/recent-pull-requests";

export default Route.extend(RouteQueryManager, {
  model() {
    return this.apollo.watchQuery({ query }, 'pullRequests');
  }
});
