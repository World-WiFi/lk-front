import React, {Component} from 'react';

import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import ListBoxItem from '../ListBoxItem';
import ListBoxSelectedItem from '../ListBoxSelectedItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ListBox extends Component {
    static defaultProps = {
        identity: 'ID',
    };

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            itemsAll: [],
            selectedItems: []
        };

        this.handleChildClick = this.handleChildClick.bind(this);
        this.getSelectedItems = this.getSelectedItems.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.refresh(this.state.items);
    }

    handleChildClick(event, child) {
        let newItems = [];
        this.state.items.map(function (item) {
            if (item.id === child.props.item.id) {
                item.status = child.state.status ? 0 : 1;
                console.log('Test', child);
            }
            newItems.push(item)
        })

        this.refresh(newItems);
    }

    onDelete(child) {
        let newItems = [];
        this.state.items.map(function (item) {
            if (item.id === child.props.item.id) {
                item.status = 0;
            }
            newItems.push(item)
        })

        this.refresh(newItems);
    }

    refresh (newItems) {
        console.log('onDelete', newItems, this);

        this.setState({items:newItems});
        this.setState({selectedItems: this.getSelectedItems(newItems)});
        this.setState({itemsRows: this.getItems(newItems)});

        let items = this.getItems(newItems);
    }

    getSelectedItems(items) {
        parent = this;
        const selectedItems = [];
        items.map(function (item) {
            if (item.status) {
                selectedItems.push(<ListBoxSelectedItem color={parent.props.color} key={item.id + parent.props.identity} item={item} onDelete={parent.onDelete}/>)
            }
        });

        return selectedItems;
    }

    getItems (items) {
        const parent = this;
        console.log(items);
        let data = [];
        items.map(function (item) {
            if(!item.status) {
                data.push(<ListBoxItem onChange={parent.handleChildClick} key={item.id + parent.props.identity} item={item} status={item.status} />);
            }
        });

        return data;
    }


    render() {
        return (
            <MuiThemeProvider>
                <Row>
                    <Col lg="6">
                        <ListGroup>
                            {this.state.itemsRows}
                        </ListGroup>
                    </Col>

                    <Col lg="6">
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {this.state.selectedItems}
                        </div>
                    </Col>
                </Row>
            </MuiThemeProvider>
        );
    }
}

export default ListBox;