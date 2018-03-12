import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Application extends Component {
    static childContextTypes = {
        env: PropTypes.object
    };

    getChildContext() {
        return {
            env:this.props.env
        };
    }

    render() {
        console.log(this.props.env)
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default Application;