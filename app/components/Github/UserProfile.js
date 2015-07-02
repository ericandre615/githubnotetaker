var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div> 
                User Profile
                username: {this.props.username}
                bio: {this.props.bio}
            </div>
        )
    }
});

module.exports = UserProfile;
