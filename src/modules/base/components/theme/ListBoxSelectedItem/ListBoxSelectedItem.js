import React, {Component} from 'react';
import Chip from 'material-ui/Chip';


class ListBoxSelectedItem extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.item;

        this.onDelete = this.onDelete.bind(this);

        this.styles = {
            chip: {
                margin: 1,
            },
            wrapper: {
                display: 'inline-block',
                flexWrap: 'wrap',
            },
        };
    }

    onDelete(event) {
        this.setState({
            isChecked: !this.state.isChecked,
        });

        this.props.onDelete(this);
        console.log('ChildClick');
    }

    render() {
        console.log()
        return (
            <Chip
                backgroundColor={this.props.color}
                key={this.props.item.id}
                onRequestDelete={() => this.onDelete()}
                style={this.styles.chip}
            >
                {this.props.item.name}
            </Chip>
        );
    }
}

export default ListBoxSelectedItem;