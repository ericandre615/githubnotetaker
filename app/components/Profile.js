var React = require('react'),
    Router = require('react-router'),
    ReactFire = require('reactfire'),
    Firebase = require('firebase'),
    Repos = require('./Github/Repos'),
    UserProfile = require('./Github/UserProfile'),
    Notes = require('./Notes/Notes');

var Profile = React.createClass({
    mixins: [Router.State, ReactFire],
    getInitialState: function() {
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    componentDidMount: function() {
        this.ref = new Firebase('https://amber-heat-1287.firebaseio.com');
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmount: function() {
        this.unbind('notes');
    },
    render: function() {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} /> 
                </div>
                <div className="col-md-4">
                   <Repos username={username} repos={this.state.repos} /> 
                </div>
                <div className="col-md-4">
                   <Notes username={username} notes={this.state.notes} /> 
                </div>
            </div>
        )
    }
});

module.exports = Profile;