import React, {Component} from 'react';
import {
    Badge,
    Button,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    ButtonGroup,
    ButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

class RouterDownload extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: new Array(2).fill(false)
        };
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
        this.setState({
            dropdownOpen: newArray
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Button type="submit" color="primary" className="mt-3 mr-3 btn-lg">
                    <i className="fa fa-download" /> Скачать ПО World Wi-Fi
                </Button>
            </div>

        )
    }
}

export default RouterDownload;
