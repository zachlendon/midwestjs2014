var TODO = React.createClass({


          render: function() {
            return React.DOM.div(null,
                React.DOM.h3(null, "TODO"),
                React.DOM.form( {onSubmit:this.handleSubmit},
                  React.DOM.input( {onChange:this.onChange, value:''} ),
                  React.DOM.button(null, 'Add #')
                )
              )
          }
        });



React.renderComponent(TODO(null), document.body);