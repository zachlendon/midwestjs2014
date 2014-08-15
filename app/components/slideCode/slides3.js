R = React.DOM

TODO = React.createClass {
  render: ->
      (
        R.div {}, [
            R.h3 null, "TODO"
            R.form {onSubmit: this.handleSubmit}, [
                  R.input onChange: this.onChange, value:''
                  R.button null, 'Add #'
            ]
        ])
}


React.renderComponent (TODO {}), document.body