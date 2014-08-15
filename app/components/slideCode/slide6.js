var HelloWorld = React.createClass({
  render: function() {
    return React.DOM.tagName({options}, 'Inside Tag Content');
  }
});

React.renderComponent(
    HelloWorld(null),
    document.getElementById('content');
);

