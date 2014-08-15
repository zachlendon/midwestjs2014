var React = require('react');
var Link = require('react-router').Link;

var linkElement = module.exports = React.createClass({
  getDefaultProps: function() {
    return {to: 'index', name: 'Home'};
  },
  render: function() {
    return (
    <li><Link to={this.props.to}>{this.props.name}</Link></li>
    )
  }
});
