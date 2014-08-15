/** @jsx React.DOM */

var TwoWay = module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {value: 'Bob'};
  },
  render: function() {
    return (
    <div id="jumboTwoWay" className="jumbotron">
      <h2>Hello <input type="text" valueLink={this.linkState('value')} /></h2>
      <p>{this.state.value}</p>
    </div>
    )
  }
});
