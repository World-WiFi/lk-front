import React, {Component} from 'react';
import {connect} from "react-redux";
import {userCredentialsFetchData} from "../actions/actions";
import {PropTypes} from "prop-types";


class UserCredentails extends Component {
    static contextTypes = {
        env: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        console.log('USER INFO', this.props.user)
        if (!this.props.user) {
            console.log('NO user info!')
        }
    }

    componentDidMount() {
        this.props.setUserCredentials(this.context.env.API_URL)
    }


    getUserName() {
        if (!this.props.user) {
            return <i className="avatar-icon"/>
        }

        return <strong className="text-info">{this.props.user.username}</strong>
    }

    getIconAvatar() {
        if (!this.props.user || !this.props.user.icon) {
            return <span className="fa fa-user avatar-icon"/>
        }

        return <img src={this.props.user.icon} className="avatar-icon"/>
    }

    render() {
        return (
            <div>{this.getIconAvatar()} {this.getUserName()}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userCredentials
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserCredentials: (url) => dispatch(userCredentialsFetchData(url))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCredentails);