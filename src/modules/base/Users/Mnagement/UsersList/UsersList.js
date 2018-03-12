import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Badge,
    Button,
    Table, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/actions";
import {Link} from 'react-router-dom';

import TableRow from '../../../../base/components/theme/TableRow/';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: {username: 'Логин', email: 'Email', created_at: 'Дата регистрации', status: 'Статус'},
        };
    }

    componentDidMount() {
        this.props.fetchData();
    }

    getRows() {
        if (this.props.items.length) {
            return this.props.items.map((row) =>
                <tr key={row.id}>
                    <td>{row.username}</td>
                    <td>{row.email}</td>
                    <td>{row.created_at}</td>
                    <td>{row.status ? <Badge color="success">Активен</Badge> :
                        <Badge color="danger">Не активен</Badge>}</td>

                    <td className="text-center" width="100px">
                        <Button color="primary" className="btn-sm"><i className="fa fa-pencil"/></Button>
                        <Button color="danger" className="btn-sm"><i className="fa fa-trash"/></Button>
                    </td>
                </tr>
            )
        } else {
            console.log(this.state.columns.length + 2, this.state.columns);
            return <tr>
                <td colSpan={(Object.keys(this.state.columns).length + 2)}>
                    <div className="text-center"><i className="fa fa-spinner fa-spin fa-5x"/></div>
                </td>
            </tr>
        }
    }

    render() {
        if (this.props.hasErrored) {
            return <div>Ошибка</div>
        }

        const parent = this
        return (
            <Row>
                <Col xs="12" lg="12">
                    <Card className="card-accent-primary">
                        <CardHeader>
                            <i className="fa fa-align-justify"/> Пользователи
                            <Link to="/user/create" className="btn btn-success float-right">
                                <i className="fa fa-plus"/> Добавить пользователя
                            </Link>
                        </CardHeader>
                        <CardBody>
                            <Table responsive bordered>
                                <thead>
                                <tr>
                                    {Object.keys(this.state.columns).map(function (attribute) {
                                        return <th key={attribute}>{parent.state.columns[attribute]}</th>;
                                    })}
                                    <th>-</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.getRows()}
                                </tbody>
                            </Table>
                            <div className="pull-right">
                                <Pagination>
                                    <PaginationItem><PaginationLink previous
                                                                    href="#">Prev</PaginationLink></PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="page-item"><PaginationLink
                                        href="#">2</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                                    <PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>
                                </Pagination>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

UsersList.propTypes = {
    items: PropTypes.array.isRequired,
    fetchItems: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        items: state.users.items,
        hasErrored: state.users.itemsHasErrored,
        isLoading: state.users.itemsIsLoading
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
