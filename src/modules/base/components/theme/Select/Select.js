import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = {
    customWidth: {
        width: 100,
    },
};


class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            items: this.props.items
        };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, index, value) {
        this.setState({value: value})
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SelectField style={styles.customWidth}
                        {...this.props}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {this.state.items.map(function (item) {
                            return <MenuItem key={item.value} value={item.value} primaryText={item.name}/>
                        })}
                    </SelectField>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Select;