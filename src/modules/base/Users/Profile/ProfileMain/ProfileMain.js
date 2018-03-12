import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import {connect} from "react-redux";

import {
    Row,
    Col,
    Badge,
    TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';

import Button from './../../../components/theme/Button';
import classnames from 'classnames';

import FormContainer from "../../../components/theme/FormContainer";
import AvatarUploader from "../../../components/theme/AvatarUploader";
import FormInput from "../../../components/theme/FormInput";

import t from '../../../../base/components/multilang/MultiLang/MultiLangT'

class ProfileMain extends Component {
    static contextTypes = {
        env: PropTypes.object.isRequired
    };

    state = {
        activeTab: '1'
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount = () => {
        document.title = "Профиль";
    }

    onRequest = (data) => this.refs.submitButton.setState({loading: true})

    onResponse = (result) => this.refs.submitButton.setState({loading: false})

    onSubmit = (result) => this.props.history.push("/user/management");

    render() {
        return (
            <div className="animated fadeIn">
                <AvatarUploader
                    name="avatar"
                    src="http://webiconspng.com/wp-content/uploads/2016/12/User-Clipart-Icon.png"
                    uploadUrl={this.context.env.API_URL + '/users/profile/avatar'}
                />

                <hr/>

                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            <i className="fa fa-wifi"></i> <span> {t(this).profile.base} </span>{'\u00A0'}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            <i className="fa fa-lock"></i> <span> {t(this).user.invite}</span>{'\u00A0'}
                            <Badge pill color="danger">4</Badge>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <FormContainer
                            encType="multipart/form-data"
                            request={{
                                url: 'http://api.wifitarget.com/users/manage/create',
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                            }}
                            onSubmit={this.onSubmit}
                            onRequest={this.onRequest}
                            onResponse={this.onResponse}
                            >
                            <Row>
                                <Col md="6">

                                    <FormInput
                                        type="text"
                                        name="username"
                                        placeholder={t(this).user.login}
                                        addons={<i className="fa fa-user"/>}
                                    />

                                    <FormInput
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        addons="@"
                                        className="mt-3"
                                    />

                                    <FormInput
                                        type="password"
                                        name="password"
                                        placeholder={t(this).user.password}
                                        addons={<i className="icon-lock"></i>}
                                        className="mt-3"
                                    />

                                </Col>
                                <Col md="6">

                                    <FormInput
                                        type="text"
                                        name="lastname"
                                        placeholder={t(this).user.lastname}
                                        addons={<i className="fa fa-user"/>}
                                        className="mb-3"
                                    />

                                    <FormInput
                                        type="text"
                                        name="firstname"
                                        placeholder={t(this).user.firstname}
                                        addons={<i className="fa fa-user"/>}
                                        className="mb-3"
                                    />

                                    <FormInput
                                        type="text"
                                        name="middlename"
                                        placeholder={t(this).user.middlename}
                                        addons={<i className="fa fa-user"/>}
                                    />

                                    <FormInput
                                        type="text"
                                        name="phone"
                                        placeholder={t(this).user.phone}
                                        addons={<i className="fa fa-user"/>}
                                        className="mt-3"
                                    />

                                    <div className="pull-right">
                                        <Button type="submit" color="success" className="mt-3" ref="submitButton">
                                            {t(this).form.saveModified}
                                        </Button>
                                    </div>
                                </Col>
                            </Row>

                        </FormContainer>

                    </TabPane>
                    <TabPane tabId="2">


                    </TabPane>
                </TabContent>

            </div>
        );
    }
}


const mapStateToProps = state => ({lang: state.lang})


export default connect(mapStateToProps)(ProfileMain);