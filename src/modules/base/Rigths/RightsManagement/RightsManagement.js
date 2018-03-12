import React, {Component} from 'react';
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


class RightsManagement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col xs="12" lg="12">
                    <Card className="card-accent-primary">
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Права
                        </CardHeader>
                        <CardBody>
                            <Table responsive bordered>
                                <thead>
                                <tr>
                                    <th>Логин</th>
                                    <th>ФИО</th>
                                    <th>Дата регистрации</th>
                                    <th>Роль</th>
                                    <th>Статус</th>
                                    <th>-</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>admin</td>
                                    <td>Admin</td>
                                    <td>2012/01/01</td>
                                    <td>Admin</td>
                                    <td>
                                        <Badge color="success">Active</Badge>
                                    </td>
                                    <td className="text-right">
                                        <Button color="success" className="btn-sm"><i className="fa fa-pencil" /></Button>
                                        <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>user</td>
                                    <td>Пользователь</td>
                                    <td>2012/02/01</td>
                                    <td>Staff</td>
                                    <td>
                                        <Badge color="danger">Banned</Badge>
                                    </td>
                                    <td className="text-right">
                                        <Button color="success" className="btn-sm"><i className="fa fa-pencil" /></Button>
                                        <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>user1</td>
                                    <td>Пользователь 1</td>
                                    <td>2012/02/01</td>
                                    <td>Admin</td>
                                    <td>
                                        <Badge color="secondary">Inactive</Badge>
                                    </td>
                                    <td className="text-right">
                                        <Button color="success" className="btn-sm"><i className="fa fa-pencil" /></Button>
                                        <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>user2</td>
                                    <td>Пользователь 2</td>
                                    <td>2012/03/01</td>
                                    <td>Member</td>
                                    <td>
                                        <Badge color="warning">Pending</Badge>
                                    </td>
                                    <td className="text-right">
                                        <Button color="success" className="btn-sm"><i className="fa fa-pencil" /></Button>
                                        <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>user3</td>
                                    <td>Пользователь 3</td>
                                    <td>2012/01/21</td>
                                    <td>Staff</td>
                                    <td>
                                        <Badge color="success">Active</Badge>
                                    </td>
                                    <td className="text-right">
                                        <Button color="success" className="btn-sm"><i className="fa fa-pencil" /></Button>
                                        <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                                    </td>
                                </tr>
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

export default RightsManagement;
