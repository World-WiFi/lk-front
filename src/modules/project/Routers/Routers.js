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

import {Link} from 'react-router-dom';

import {ROUTERS} from '../../../constants/routers';



class RouterTr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    <Link to={`/router/view/${this.props.id}`} className="btn btn-link">{this.props.name}</Link>
                </td>
                <td>{this.props.created_at}</td>
                <td>
                    <Badge color={this.props.status ? 'success' : 'danger'}>
                        {this.props.status ? 'активен' : 'не активен'}
                    </Badge>
                </td>
                <td className="text-right">
                    <Button color="success" className="btn-sm"><i className="fa fa-pencil" /></Button>
                    <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                </td>
            </tr>
        )
    }
}

const listItems = ROUTERS.map((item) =>
    <RouterTr
        key={item.id}
        id={item.id}
        name={item.name}
        created_at={item.created_at}
        status={item.status}
    />
);


class Routers extends Component {
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
                <Row>
                    <Col xs="12" lg="6">
                        <ButtonGroup>
                            <ButtonDropdown isOpen={this.state.dropdownOpen[0]} toggle={() => { this.toggle(0); }}>
                                <DropdownToggle color="light" caret>
                                    mikrotik
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>mikrotik q1</DropdownItem>
                                    <DropdownItem>mikrotik</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Добавить </Button>
                        </ButtonGroup>



                    </Col>

                    <Col xs="12" lg="6">
                        <Card className="card-accent-primary">
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Роутеры
                            </CardHeader>
                            <CardBody>
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th>Наименование</th>
                                        <th>Дата регистрации</th>
                                        <th>Статус</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {listItems}


                                    </tbody>
                                </Table>
                                {/*<Pagination>
                                    <PaginationItem disabled><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                                </Pagination>*/}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default Routers;
