import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import 'babel-polyfill';

import {
    Container,
    Row,
    Col,
    CardGroup,
    Card,
    CardBody
} from 'reactstrap';

import {Link} from 'react-router-dom';

import Button from './../../../components/theme/Button';

import {connect} from 'react-redux';
import FormInput from "../../../components/theme/FormInput";
import FormContainer from "../../../components/theme/FormContainer";


class Login extends Component {
    static contextTypes = {
        env: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        document.title = "Авторизация";
    }

    onRequest = (data) => this.refs.submitButton.setState({loading: true})

    onResponse = (result) => this.refs.submitButton.setState({loading: false})

    onSubmit = (result) => {
        console.log('Toekn', result.data.token);
        sessionStorage.setItem('jwt', result.data.token);

        this.props.history.push("/");
    }


    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <div className="form-login-header">
                                <img src="/img/logo_src_1.png"/>
                            </div>

                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <FormContainer
                                request={{url: this.context.env.API_URL + '/users/auth/login'}}
                                onSubmit={this.onSubmit}
                                onRequest={this.onRequest}
                                onResponse={this.onResponse}
                            >
                                <CardGroup>
                                    <Card className="p-4">
                                        <CardBody>
                                            <h1>Авторизация</h1>
                                            <p className="text-muted">
                                                Вход в аккаунт
                                            </p>
                                            <FormInput
                                                type="text"
                                                name="username"
                                                placeholder="Логин"
                                                addons={<i className="fa fa-user"/>}
                                            />

                                            <FormInput
                                                type="password"
                                                name="password"
                                                placeholder="Пароль"
                                                addons={<i className="icon-lock"></i>}
                                                className="mt-3 mb-3 "
                                            />
                                            <Row>
                                                <Col xs="6">
                                                    <Button type="submit" color="primary"
                                                            className="px-4 btn btn-block"
                                                            ref="submitButton"
                                                    >
                                                        Вход
                                                    </Button>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <Button color="link" className="px-0">Забыли пароль?</Button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </FormContainer>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <div className="form-login-footer text-center">
                                <Link to="/register" className="btn btn-primary">Регистрация</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(
    mapStateToProps,
    dispatch => ({
        onLogin: (auth) => {
            dispatch({type: 'AUTH_LOGIN', payload: auth})
        }
    })
)(Login);