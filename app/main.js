/** @jsx React.DOM */

var RNR = require('react-nested-router');
var Router = RNR.Router;
var Route = RNR.Route;

var App = require('./components/app');
var Index = require('./components/index');
var Foo = require('./components/foo');
var Bar = require('./components/bar');

Router.useHistory();

Router(
  <Route handler={App}>
    <Route name="foo" handler={Foo} />
    <Route name="bar" path="/what/evz" handler={Bar} />
    <Route name="index" path="/" handler={Index} />
  </Route>
).renderComponent(document.body);

