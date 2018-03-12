import React, {Component} from 'react';
import {connect} from "react-redux";
const languages =require('../../../../../messages/index')

const locale = require('browser-locale')()

class MultiLang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowLangs: this.props.allowLangs ? this.props.allowLangs : ['ru', 'en'],
            langPath: this.props.langPath ? this.props.langPath : '../../../../../messages/',
        };

        this.state.locale = this.getLocale(this.state.allowLangs)

        this.props.setLang(this.state.allowLangs, languages, this.state.locale);
    }

    getLocale(allowLangs) {
        const lang = window.localStorage.getItem('locale')

        if (lang) {
            return lang;
        } else {
            if (allowLangs.indexOf(locale) !== -1) {
                return locale;
            }
        }
        return 'en';
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        locale: state.locale
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLang: (locales, dictonary, locale) => {
            dispatch({type: 'MULTILANG', payload:{locales:locales, dictonary: dictonary, locale:locale}})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiLang);