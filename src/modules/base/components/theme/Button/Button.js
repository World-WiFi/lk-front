import React, {Component} from 'react';
import {Button as ButtonStrap} from 'reactstrap';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:        this.props.children,
            loading: false,
            loadingText: <i className="fa fa-spinner fa-spin" />
        };

        if (this.props.loading) {
            this.state.loading = true
        }
    }

    componentWillReceiveProps(prevProps) {
        if (this.props.loading) {
            this.setState({loading: true})
        }
    }

    render() {
        return (
            <ButtonStrap  {...this.props} loading="" disabled={this.state.loading}>
                {this.state.loading ? this.state.loadingText : this.state.text}
                </ButtonStrap>
        );
    }
}

export default Button;