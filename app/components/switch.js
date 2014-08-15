/** @jsx React.DOM */

var React = require('react');

var Switch = module.exports = React.createClass({
  getInitialState: function() {
    return { isChecked: false };
  },
  getDefaultProps: function() {
    return { onLabel: 'On', offLabel: 'Off'};
  },
  onChange: function() {
    this.setState({ isChecked: !this.state.isChecked });
  },
  render: function() {
    return (
      <div id="jumboSwitch"  className="jumbotron">
        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.onChange}
          />
          {this.state.isChecked ? this.props.onLabel : this.props.offLabel}
        </label>
      </div>
    );
  }
});