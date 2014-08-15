/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

var Tab = module.exports = React.createClass({

    getPath: function() {
        return window.location.pathname;
    },

    //hack (just a demo ya'll!)
    isActive: function() {
        var pathEquals = this.getPath() == "/" + this.props.to;
        if (this.props.to == "index" && this.getPath() == "/") {
          pathEquals = true;
        }
        return pathEquals;
    },

    render: function() {
      return (
        <li className={this.isActive() ? 'active' : ''}>
           <Link to={this.props.to}>{this.props.name}</Link>
        </li>
      )
    }
});

var TabMenu = module.exports = React.createClass({

  render: function() {
    var tabNodes = this.props.tabs.map(function(tab) {

      return (
        <Tab
          active={this.props.activeName == tab.name}
          to={tab.to}
          name={tab.name}/>
      );
    }, this);

    return (
      <ul className="nav nav-tabs">
        {tabNodes}
      </ul>
    );
  }
});

var App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="pageHeader">
          <h1 className="titleHeader">MidwestJS - ReactJS Demos</h1>
            <div className="container">

              <div className="navbar-inner">
                <TabMenu
                  tabs={[{to: "index", name: "Home"},
                         {to: "switch", name: "Switch", onLabel: "Bright", offLabel: "Dark"},
                         {to: "bar", name: "Bar"},
                         {to: "twoWay", name: "Two Way Binding"},
                         {to: "search", name: "Search"},
                         {to: "demomash", name: "Pet Store Shopping To Do List"}]} />
              </div>
               {this.props.activeRouteHandler()}
            </div>
      </div>
    );
  },
});

