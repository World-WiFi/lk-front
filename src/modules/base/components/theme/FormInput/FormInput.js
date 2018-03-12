import React, {Component} from 'react';
import {
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

class FormInput extends Component {
    static defaultProps = {
        formed: '1'
    }

    constructor(props) {
        super(props);

        this.state    = {
            value:  this.props.value,
            placeholder:  this.props.placeholder,
            errors: this.props.errors ? this.props.errors : [],
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(prevProps) {
        this.setState({errors: this.props.errors, placeholder: this.props.placeholder})
    }

    onChange(event) {
        this.setState({value: event.target.value, errors: []})
        this.props.onChange(event)
    }

    getInput() {
        if (this.props.type === 'select') {
            let items = this.props.items;
            if (this.props.empty) {
                items.unshift({id:'', name:''});
            }

            const options = items.map(function (item) {
                return <option key={item.id} value={item.id}>{item.name}</option>;
            })

            return <Input type="select"
                          {...this.props}
                          ref={this.props.name}
                          value={this.state.value}
                          placeholder={this.state.placeholder}
                          onChange={(event) => this.onChange}
                          className=""
            >
                {options}
            </Input>
        }

        return  <Input
            {...this.props}
            ref={this.props.name}
            value={this.state.value}
            placeholder={this.state.placeholder}
            onChange={this.onChange}
            className=""
        />
    }

    render() {
        const input = this.getInput()



        let errors = this.state.errors ? this.state.errors : [];

        return (
            <div>
                <InputGroup className={`${this.state.errors.length ? 'has-error' : ''} ${this.props.className}`}>

                    {this.props.addons ? (
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                {this.props.addons}
                            </InputGroupText>
                        </InputGroupAddon>
                    ) : ''}

                    {input}
                </InputGroup>
                <small className="text-danger">
                    {this.state.errors.map(function (object, i) {
                        return <i key={i}>{object}</i>;
                    })}
                </small>
            </div>
        );
    }
}

export default FormInput;