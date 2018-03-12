import React, {Component} from 'react';

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Badge,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Table
} from 'reactstrap';
import {connect} from "react-redux";
import {referralsFetchData, inviteUpdateData} from "./actions/actions";

import t from '../../base/components/multilang/MultiLang/MultiLangT'
import Button from "../../base/components/theme/Button";
import {PropTypes} from "prop-types";

const NotificationSystem = require('react-notification-system');

class Referals extends Component {
    static contextTypes = {
        env: PropTypes.object.isRequired
    };

    static defaultProps = {
        referrals: [],
        user:{userCredentials:{invite_code:''}}
    }

    constructor(props) {
        super(props);
        this.state = {
            columns: {
                icon:        '',
                login:       'username',
                email:       'Email',
                created_at:  t(this).user.created_at,
                status:      t(this).user.status,
            },
            invite_code: '',
        };
    }

    componentDidMount() {
        this.props.fetchData(this.context.env.API_URL);
        document.title = "Реферальная программа";
    }

    onChangeCode = (event) => {
        this.setState({invite_code: event.target.value})
    }

    onSubmit = (event) => {
        this.props.inviteUpdateData(this.context.env.API_URL, {invite_code: this.state.invite_code})
    }

    notise = (message, color = 'success') => {
        this.refs.notificationSystem.addNotification({
            message: message,
            level:   color
        });
    }

    getRows() {
        console.log('THIS props  ', this.props);

        if (this.props.referrals.length) {
            return this.props.referrals.map((row) =>
                <tr key={row.id}>
                    <td><img src={row.icon} className="avatar-icon" /> </td>
                    <td>{row.profile.name}</td>
                    <td>{row.email}</td>
                    <td>{row.created_at}</td>
                    <td>{row.status ? <Badge color="success">{t(this).user.statusActive}</Badge> :
                        <Badge color="danger">{t(this).user.statusInActive}</Badge>}</td>

                    <td className="text-center" width="100px"/>
                </tr>
            )
        } else {
            return <tr>
                <td colSpan={(Object.keys(this.state.columns).length + 2)}>
                    <div className="text-center"><i className="fa fa-spinner fa-spin fa-5x"/></div>
                </td>
            </tr>
        }
    }

    render() {
        console.log('Referals proops', this.props)

        if (!this.state.invite_code && this.props.user && this.props.user.userCredentials) {
            this.setState({invite_code: this.props.user.userCredentials.invite_code})
        }

        if (this.props.hasErrored) {
            return <div>{t(this).error}</div>
        }

        const parent = this
        return (
            <Row>
                <Col md="4">

                    <div>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="icon-plus"/>
                                </InputGroupText>
                            </InputGroupAddon>

                            <Input
                                type="text"
                                name="invite_code"
                                value={this.state.invite_code}
                                placeholder={t(this).user.invite}
                                onChange={this.onChangeCode}
                            />
                            <Button color="success" onClick={this.onSubmit}>Сохранить</Button>
                        </InputGroup>
                    </div>

                    <NotificationSystem ref="notificationSystem"/>

                </Col>
                <Col md="8">
                    <Card className="card-accent-primary">
                        <CardHeader>
                            <i className="fa fa-align-justify"/> {t(this).user.users}
                        </CardHeader>
                        <CardBody>
                            <Table responsive bordered>
                                <thead>
                                <tr>
                                    {Object.keys(this.state.columns).map(function (attribute) {
                                        return <th key={attribute}>{t(parent).user[attribute]}</th>;
                                    })}
                                    <th>-</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.getRows()}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        referrals:  state.referrals.referrals,
        hasErrored: state.referrals.itemsHasErrored,
        isLoading:  state.referrals.itemsIsLoading,
        lang:       state.lang,
        user:       state.user,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData:        (url) => dispatch(referralsFetchData(url)),
        inviteUpdateData: (url, data) => dispatch(inviteUpdateData(url, data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Referals);
