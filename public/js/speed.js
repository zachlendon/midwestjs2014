/** @jsx React.DOM */
(function () {
  var factor = 8;
  var SquareModel = Backbone.Model.extend({
    defaults: {
      highlighted: false,
      counter: 0
    },
    isHighlighted: function() {
      return this.attributes.highlighted;
    },
    addHighlight: function() {
      this.set( { highlighted: true } );
    },


    initialize: function() {
      var _self = this;
      //not safe as production philosophy, but for a demo, sure
      setInterval(function () {
            var highlightedValue = (Math.random() < 0.5);
              _self.set({highlighted: highlightedValue});
              //console.log("updated");
      }, 1);
    }
  });

  var Square = React.createClass({
    componentWillUpdate: function(nextProps, nextState) {
      return nextProps.classes != this.props.classes;
    },
    render: function() {
      return (<div className={this.props.classes}></div>);
    }
  });

  var Squares = React.createClass({
    render: function () {
      var cx = React.addons.classSet;
      var counter = 0;
      var squares = this.props.collection.slice(this.props.offSet, this.props.offSet + factor).map(function(square) {
        counter++;
        var classes = cx({
          'square': true,
          'highlighted': square.isHighlighted(),
        });

        return (<Square classes={classes}/>);
    }, this);
      return (<div>
          {squares}
          </div>
      )
    }
  });

  var SquareRow = React.createClass({

    render: function() {
      return (
          <Squares offSet={this.props.offSet} collection={this.props.collection}/>
      )
    }
  });

    var SquareApp = React.createClass({
    mixins: [Backbone.React.Component.mixin],
    render: function() {
      if (this.props.collection) {
        var numberOfRows = Math.floor(this.props.collection.length / factor);
        if (numberOfRows == 0) {
          numberOfRows = 1;
        }
        var offSets = [];
        for (var i = 0; i<numberOfRows; i++) {
          offSets.push(i * factor);
        }
        var squareRows = offSets.map(function(offSetValue) {
          return (
              <SquareRow offSet={offSetValue} collection={collection}/>
          )
        }, this);

        return (
          <div>
                {squareRows}
          </div>
        )
      } else {
        return (
          <div>
          </div>
        )
      }
    }
  });

  var createSquareModel = function (counter) {
    var highlighted = (Math.random() < 0.5);
    return new SquareModel({highlighted: highlighted, counter: counter});
  };

  var squareModel = createSquareModel();
  var collection = new Backbone.Collection([squareModel]);

  var squares = SquareApp({
    collection: collection,
  });

  React.renderComponent(squares, document.body);

  var counter = 0;
  var maxCounter = 50;
  while (counter < maxCounter) {
      var square = createSquareModel(counter);
      collection.add(square);
      counter++;
  }
}());
