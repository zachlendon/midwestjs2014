/** @jsx React.DOM */

var RNR = require('react-nested-router');
var Router = RNR.Router;
var Route = RNR.Route;

Router.useHistory();

Router(
  <Route handler={require('./components/app')}>
    <Route name="foo" handler={require('./components/foo')} />
    <Route name="bar" path="/what/evz" handler={require('./components/bar')} />
    <Route name="index" path="/" handler={require('./components/index')} />
  </Route>
).renderComponent(document.body);

