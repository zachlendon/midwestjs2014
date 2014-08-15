/** @jsx React.DOM */
//credit to http://fitacular.com/blog/react/2014/06/23/react-file-upload-base64/ for upload inspiration
var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();

var ShoppingList = module.exports = React.createClass({

  getInitialState: function() {
    return { textareaValue: "" }
  },

  getDefaultProps: function() {
    return {
       defaultTextAreaValue: "Enter your markdown formatted shopping list here!"
     }
  },

  handleBlur: function() {
    this.setState({textareaValue: ""});
  },

  handleChange: function() {
    this.setState({textareaValue: this.refs.shoppingList.getDOMNode().value});
  },

  hasDataURI: function() {
    return this.props.dataURI != null;
  },

  handleTextAreaClick: function() {
    if (this.refs.shoppingList.getDOMNode().defaultValue ==
      this.refs.shoppingList.getDOMNode().value) {
      this.refs.shoppingList.getDOMNode().value = "";
    }
  },

  submitList: function(e) {
    this.setState({markdownOutput: converter.makeHtml(this.refs.shoppingList.getDOMNode().value)});
    e.preventDefault();
  },

 render: function() {
  var listStyle = {};
  if (this.state.markdownOutput != null) {
    listStyle = {visibility: 'hidden'};
  };

  if (this.hasDataURI()) {
    return (
            <div>
              <img src={this.props.dataURI} className="mashImage"/>
                  <div>
                    <span style={{"-webkit-padding-start": "0px"}} dangerouslySetInnerHTML={{__html: this.state.markdownOutput}} />
                    <div className="MarkdownEditor">
                      <textarea rows="3" cols="50" id="shoppingList" ref="shoppingList"
                      style={listStyle}
                      onClick={this.handleTextAreaClick} defaultValue={this.props.defaultTextAreaValue} ></textarea>
                      <button style={listStyle} onClick={this.submitList}>Submit List</button>
                    </div>
              </div>
            </div>
    );
  } else {
    return (
      <div/>
    )
  }
}
});

var UploadFileForm = module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataURI: null
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  uploadFile: function(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
      self.setState({
        dataURI: upload.target.result
      });
    }
    reader.readAsDataURL(file)
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return this.state.dataURI != nextState.dataURI;
  },

  render: function() {
    var dataStyle = {};
    if (this.state.dataURI != null) {
      dataStyle = {visibility: 'hidden'};
    };

    return (
      <div id="jumboMash">
         <h2>Pet Store Shopping To Do List</h2>
        <div style={dataStyle}>
          <form className="form" onSubmit={this.handleSubmit} encType="multipart/form-data">

            <div id="uploadDiv" className="form-group col-md-5">
              <input id="faux" type="text" placeholder="Double-click/tap to upload an image of your pet" />
                <div id="wrapper">
                    <input id="input" size="1" type="file" onChange={this.uploadFile}/>
                </div>
             </div>
          </form>
          </div>
        <ShoppingList dataURI={this.state.dataURI}/>
      </div>
    );
  },
});