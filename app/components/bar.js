/** @jsx React.DOM */
var React = require('react');
var PureRenderMixin = require('react').addons.PureRenderMixin;

var Bar = module.exports = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div id="jumboBar" className="jumbotron">
        <h2>{true ? 'Happy Hour' : ''} Bar</h2>
        <p>Which way to the ... bar?</p>
        <p><a class="btn btn-primary btn-lg" role="button">Learn more</a></p>
      </div>
    );
  }
});

