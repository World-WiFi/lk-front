import React, {Component} from 'react';

import {Input as InputBootstrap} from 'reactstrap';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ref: this.props.name
        };
    }

    render() {
        return (
            <InputBootstrap  {...this.props} />
        );
    }
}

export default Input;