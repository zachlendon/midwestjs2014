TODO = React.createClass {

          render: ->
              (
                React.DOM.div {}, [
                    React.DOM.h3 null, "TODO"
                    React.DOM.form {onSubmit: this.handleSubmit}, [
                          React.DOM.input onChange: this.onChange, value:''
                          React.DOM.button null, 'Add #'
                    ]
                ])
        }


React.renderComponent (TODO {}), document.body