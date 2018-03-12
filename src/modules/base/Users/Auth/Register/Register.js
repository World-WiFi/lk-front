import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardGroup
} from 'reactstrap';

import Button from './../../../components/theme/Button';


import {Link} from 'react-router-dom';
import FormInput from "../../../components/theme/FormInput";
import FormContainer from "../../../components/theme/FormContainer";
import {PropTypes} from "prop-types";

class Register extends Component {
    static contextTypes = {
        env: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            loading:    false
        };

        this.onSubmit   = this.onSubmit.bind(this);
    }

    componentDidMount = () => {
        document.title = "Регистрация";
    }

    onSubmit(result) {
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
                                request={{url:this.context.env.API_URL + '/users/registration/index'}}
                                onSubmit={this.onSubmit}
                            >
                                <CardGroup>
                                    <Card className="з-4">
                                        <CardBody className="p-4">
                                            <h1>Регистрация</h1>
                                            <p className="text-muted">Регистрация нового пользователя</p>

                                            <FormInput
                                                type="text"
                                                name="username"
                                                placeholder="Логин"
                                                addons={<i className="fa fa-user" />}
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
                                                placeholder="Пароль"
                                                addons={<i className="icon-lock"></i>}
                                                className="mt-3"
                                            />

                                            <FormInput
                                                type="password"
                                                name="password_confirm"
                                                placeholder="Повтор пароля"
                                                addons={<i className="icon-lock"></i>}
                                                className="mt-3"
                                            />

                                            <FormInput
                                                type="text"
                                                name="invite_code"
                                                placeholder="Инвайт"
                                                addons={<i className="icon-plus"></i>}
                                                className="mt-3"
                                            />

                                            <Button type="submit" color="success" block className="mt-3" loading={this.state.loading} >
                                                Создать аккаунт
                                            </Button>

                                        </CardBody>
                                    </Card>
                                </CardGroup>
                            </FormContainer>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <div className="form-login-footer text-center">
                                <Link to="/login" className="btn btn-primary">Авторизация</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
