import React, {Component} from 'react';

import Checkbox from 'material-ui/Checkbox';

class ListBoxItem extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.item;
        this.state.status = this.props.item.status;

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            status: this.state.status ? 0 : 1,
        });

        this.props.onChange(event, this);
    }

    render() {
        return (
            <div className="text-success">
                <Checkbox
                    name="StylesOverridingInlineExample"
                    label={this.state.name}
                    checked={this.state.status ? true : false}
                    onChange={this.handleOnChange}
                    onClick={this.handleOnChange}
                />
            </div>
        );
    }
}

export default ListBoxItem;