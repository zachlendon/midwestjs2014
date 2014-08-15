/** @jsx React.DOM */

var React = require('react');

var Search= module.exports = React.createClass({

    getInitialState: function(){
        return { searchString: '', numberOfSearches: 0, currentData: [], originalData: []};
    },

    handleChange: function(e){
        this.setState({searchString:e.target.value, numberOfSearches: this.state.numberOfSearches+1});
    },

    loadCompaniesFromServer: function() {
        $.ajax({
            url: 'http://localhost:4000/companies',
            cache: false,
            type: "GET",
            dataType: 'json',
            async: false,
            contentType: "application/json",
            crossDomain: true,
            error: function (parsedjson, textStatus, errorThrown) {
                console.log("parsedJson: " + JSON.stringify(parsedjson));
            }.bind(this),
            success: function( response ) {
                this.setState({currentData: response, originalData: response});
            }.bind(this)
        });
    },

    componentWillMount: function() {
        this.loadCompaniesFromServer();
    },

    render: function() {
        searchString = this.state.searchString.trim().toLowerCase();

        //Filter the results.
        this.state.currentData = this.state.originalData.filter(function(l){
            return l.company.toLowerCase().match( searchString );
        });

        return (<div className="search">
                    <p>Number of Current Matches: <span>{this.state.currentData.length}</span></p>
                    <p>Total Number of  Searches: <span>{this.state.numberOfSearches}</span></p>
                    <form>
                        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                    </form>
                    <ul >
                        { this.state.currentData.map(function(l){
                            return <li>{l.company} </li>
                        }) }
                    </ul>
                </div>);

    }
});

