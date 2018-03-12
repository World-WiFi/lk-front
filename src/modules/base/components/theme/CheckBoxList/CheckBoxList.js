import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Checkbox from 'material-ui/Checkbox';


class CheckBoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange() {
        this.setState((state) => ({
            checked: !state.checked,
        }));
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="text-success">
                    <Checkbox
                        {...this.props}
                        name="StylesOverridingInlineExample"
                        label={this.props.name}
                        checked={this.state.checked}
                        onChange={this.handleOnChange}
                        onClick={this.handleOnChange}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default CheckBoxList;