/** @jsx React.DOM */

var Route = require('react-router').Route;

module.exports = (
  <Route location="history" handler={require('../components/app')}>
    <Route name="switch" path="/switch" handler={require('../components/switch')} />
    <Route name="bar" path="/bar" handler={require('../components/bar')} />
    <Route name="twoWay" path="/twoWay" handler={require('../components/twoWay')} />
    <Route name="index" path="/" handler={require('../components/index')} />
    <Route name="search" path="/search" handler={require('../components/search')} />
    <Route name="demomash" path="/demomash" handler={require('../components/demomash')} />
  </Route>
);
