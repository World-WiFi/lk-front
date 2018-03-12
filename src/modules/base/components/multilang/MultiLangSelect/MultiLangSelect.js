import React, {Component} from 'react';
import {connect} from "react-redux";

import Select from 'react-select';
import 'react-select/dist/react-select.css';

require('./style.css')

class GravatarOption extends Component{
    constructor(props) {
        super(props);

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }
    handleMouseDown (event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSelect(this.props.option, event);
    }
    handleMouseEnter (event) {
        this.props.onFocus(this.props.option, event);
    }
    handleMouseMove (event) {
        if (this.props.isFocused) return;
        this.props.onFocus(this.props.option, event);
    }
    render () {
        return (
            <div className={this.props.className}
                 onMouseDown={this.handleMouseDown}
                 onMouseEnter={this.handleMouseEnter}
                 onMouseMove={this.handleMouseMove}
                 title={this.props.option.title}>
                <img height="20px" src= {`/img/icons/lang/${this.props.option.value}.png`} />
            </div>
        );
    }
}

class GravatarValue extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="Select-value" title={this.props.value.label}>
				<span className="Select-value-label">
                    <img height="20px" src= {`/img/icons/lang/${this.props.value.value}.png`} />
				</span>
            </div>
        );
    }
}

function arrowRenderer () {
    return (
        <svg viewBox="0 0 24 24" ><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>
    );
}
class MultiLangSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };

        this.handleChange = this.handleChange.bind(this)

    }

    getInitialState () {
        return {};
    }
    setValue (value) {
        this.setState({ value });
    }

    handleChange (selectedOption,)  {
        console.log('Set lang ', selectedOption, this.props.lang);

        if (selectedOption) {
            this.setState({ selectedOption });

            this.props.setLang(this.props.lang, selectedOption.value);
        }
    }

    render() {
        const { selectedOption } = this.state;

        const value = (selectedOption && selectedOption.value) || this.props.locale.locale;

        var placeholder = <span>&#9786; Select User</span>;

        return (<div>
                <Select
                    multi={false}
                    labelKey="name"
                    //arrowRenderer={arrowRenderer}
                    onChange={this.handleChange}
                    optionComponent={GravatarOption}
                    placeholder={placeholder}
                    value={value}
                    valueComponent={GravatarValue}
                    options={[
                        { value: 'ru', label: 'Ru' },
                        { value: 'en', label: 'En' },
                    ]}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        locale: state.lang
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLang: (lang, locale) => {
            window.localStorage.setItem('locale', locale)
            dispatch({type: 'MULTILANG', payload:{...lang, locale:locale}})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultiLangSelect);