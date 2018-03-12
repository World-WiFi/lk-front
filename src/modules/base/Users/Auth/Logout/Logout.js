import React, {Component} from 'react';
import {PropTypes} from 'react';

import 'babel-polyfill';
import {connect} from "react-redux";

class Logout extends Component {
    constructor(props) {
        super(props);
        sessionStorage.setItem('jwt', '');
        this.props.onLogout()
        console.log('logout', sessionStorage.getItem('jwt'));
        this.props.history.push('/login');
    }
    render() {
        return ( <div></div>
        )
    }
}

function mapStateToProps(state) {
    return state.auth;
}

export default connect(
    mapStateToProps,
    dispatch => ({
        onLogout: (auth) => {
            dispatch({type: 'AUTH_LOGOUT_CLEAR', payload: {auth:{}, user:{}, users:{}}})
        }
    })
)(Logout);
