import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Col,
    Card,
    CardGroup,
    CardBody,
    Button,
} from 'reactstrap';


import FormContainer from "../../../components/theme/FormContainer/";

import {connect} from "react-redux";
import {itemsFetchData} from "../actions/actions";
import FormInput from "../../../components/theme/FormInput";
import AvatarUploader from "../../../components/theme/AvatarUploader";

/*import TinyMCE from 'react-tinymce';

<script src="http://tinymce.cachefly.net/4.2/tinymce.min.js"></script>*/

/*
class EditorDraftjs extends React.Component {
    handleEditorChange(e) {
        console.log(e.target.getContent());
    }

    render() {
        return (
            <TinyMCE
                content="<p>This is the initial content of the editor</p>"
                config={{
                    plugins: 'autolink link image lists print preview',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}
*/


class UsersCreate extends Component {
    onRequest = (data) => this.refs.submitButton.setState({loading: true})

    onResponse = (result) => this.refs.submitButton.setState({loading: false})

    onSubmit = (result) => this.props.history.push("/user/management");

    render() {
        if (this.props.hasErrored) {
            return <div>Ошибка</div>
        }

        return (
            <Row>
                <Col md="6">

                    <CardGroup>
                        <Card className="з-4">
                            <CardBody className="p-4">
                                <h1>Создание пользователя</h1>
                                <p className="text-muted">Создание нового пользователя</p>


                                <FormContainer
                                    encType="multipart/form-data"
                                    name="formUserCreate"
                                    request={{url: 'http://api.wifitarget.com/users/manage/create', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}}
                                    onSubmit={this.onSubmit}
                                    onRequest={this.onRequest}
                                    onResponse={this.onResponse}
                                >

                                    <AvatarUploader name="avatar" />

                                    <Row>
                                        <Col md="6">

                                            <FormInput
                                                type="text"
                                                name="username"
                                                placeholder="Логин"
                                                addons={<i className="fa fa-user"/>}
                                            />

                                            <FormInput
                                                type="text"
                                                name="phone"
                                                placeholder="Телефон"
                                                addons={<i className="fa fa-user"/>}
                                                className="mt-3"
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
                                                type="text"
                                                name="invite_code"
                                                placeholder="Инвайт"
                                                addons={<i className="icon-plus"></i>}
                                                className="mt-3"
                                            />

                                            {/*<EditorDraftjs/>*/}

                                            <Button type="submit" color="success" block className="mt-3"  ref="submitButton">
                                                Создать аккаунт
                                            </Button>
                                        </Col>
                                        <Col md="6">

                                            <FormInput
                                                type="text"
                                                name="lastname"
                                                placeholder="Фамилия"
                                                addons={<i className="fa fa-user"/>}
                                                className="mb-3"
                                            />

                                            <FormInput
                                                type="text"
                                                name="firstname"
                                                placeholder="Имя"
                                                addons={<i className="fa fa-user"/>}
                                                className="mb-3"
                                            />

                                            <FormInput
                                                type="text"
                                                name="middlename"
                                                placeholder="Отчество"
                                                addons={<i className="fa fa-user"/>}
                                            />
                                        </Col>
                                    </Row>

                                </FormContainer>
                            </CardBody>
                        </Card>
                    </CardGroup>

                </Col>
            </Row>
        )
    }

}

UsersCreate.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersCreate);
