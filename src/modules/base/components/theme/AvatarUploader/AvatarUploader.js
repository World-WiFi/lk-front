import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {userCredentialsFetchData} from "../../../Users/Auth/actions/actions";


const NotificationSystem = require('react-notification-system');

require("./style.css");


class AvatarUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file:            '',
            imagePreviewUrl: this.props.src,
            preview:         "Выберите аватар",
            uploadUrl:       this.props.uploadUrl
        };

        console.log('PROPS!!',this.props);

        if (this.props.user && this.props.user.icon) {
            this.state.imagePreviewUrl = this.props.user.icon;
        }

        this._handleSelectImage = this._handleSelectImage.bind(this)
        this._handleImageChange = this._handleImageChange.bind(this)
    }

    notise = (message, color = 'success') => {
        this.refs.notificationSystem.addNotification({
            message: message,
            level:   color
        });
    }

    _handleImageChange(e) {
        console.log('PROPS', this.props);

        if (e.target.files[0]) {
            let reader = new FileReader();
            let file   = e.target.files[0];

            reader.onloadend = () => {
                this.setState({
                    file:            file,
                    imagePreviewUrl: reader.result
                });

                if (this.state.uploadUrl) {
                    /*  const request  = new Request(this.state.uploadUrl, {
                          method:  'POST',
                          headers: new Headers(headers),
                          body: JSON.stringify(this.state.attributes)
                      });
 */
                    let data = new FormData()
                    data.append('image', file)

                    axios.post(this.props.uploadUrl, data, {
                        headers: {
                            'Content-Type':  'multipart/form-data',
                            'Authorization': sessionStorage.getItem('jwt')
                        }
                    }).then(result => {
                        console.log('Upload image', result.data.status);
                        if (result.data.status === 1) {
                            this.props.setUserCredentials()
                            this.notise('Изображение успешно загружено')
                        } else {
                            this.notise('Не удалось загрузить изображение', 'error')
                        }
                    }).catch(error => {
                        this.notise('Не удалось загрузить изображение', 'error')

                        return error;
                    });
                }
            }

            reader.readAsDataURL(file)
        }
    }

    _handleSelectImage() {
        this.refs.fileInput.click();
    }

    render() {
        let $imagePreview = null;
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<img src={this.state.imagePreviewUrl}/>);
        } else {
            $imagePreview = <div className="previewText">Выберите аватар</div>;
        }

        return (
            <div className="previewComponent">
                <div className="imgPreview" onClick={this._handleSelectImage}>
                    {$imagePreview}
                </div>
                <input
                    name={this.name}
                    className="fileInput-hidden"
                    ref="fileInput"
                    type="file"
                    onChange={this._handleImageChange}
                />
                <NotificationSystem ref="notificationSystem"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.userCredentials
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserCredentials: (url) => dispatch(userCredentialsFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarUploader);