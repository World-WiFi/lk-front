import React, {Component} from 'react';

import {
    Form
} from 'reactstrap';
import axios from "axios/index";

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /*childrenNew: this.props.children,*/
            attributes: {},
            loading: false,
        };



        this.setAttributes()

        this.state.errors = this.setEmptyErrors([]);

        this.state.children = this.getChilds();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    setEmptyErrors(value) {
        let errors = {}
        for (let attribute in this.state.attributes) {
            errors[attribute] = value;
        }
        return errors;
    }

    onChange(event) {
        this.setState({errors: this.setEmptyErrors([])});

        const attributes = this.state.attributes;
        attributes[event.target.name] = event.target.value;
        return this.setState({attributes: attributes});
    }

    onSubmit(event) {
        console.log('PRE SUBMIT state form start', this.state.loading, this.state, this)

        event.preventDefault();

        if (this.state.loading !== 1) {
            if (typeof this.props.onRequest === "function") {
                this.props.onRequest(this.state.attributes);
            }

            this.sendForm()
        }
    }

    getRequest(url, method = 'POST', headers = {}) {
        return new Request(url, {
            method: method,
            headers: new Headers(headers),
            body: JSON.stringify(this.state.attributes)
        })
    }

    sendForm() {
        let parent = this;

        parent.setState({loading: true});


        const request = this.getRequest(this.props.request.url, this.props.request.method, this.props.request.headers);

        return fetch(request)
            .then(response => {
                return response.json();
            }).then(result => {
                if (result.status === 1) {
                    parent.props.onSubmit(result);
                } else {
                    const attrs = this.updateAttributes(result.data, this.state.errors)
                    parent.setState({errors: attrs});
                    parent.setState({children: this.getChilds()});
                    this.setState({children: this.getChilds()});

                    if (typeof this.props.onResponse === "function") {
                        this.props.onResponse(result);
                    }
                }
                parent.setState({loading: false});
            }).catch(error => {
                console.log('Error', parent.state);

                parent.setState({loading: false});

                if (typeof this.props.onResponse === "function") {
                    this.props.onResponse(error);
                }

                return error;
            });
    }

    updateAttributes(attributes, oldAttributes) {
        const attrs = oldAttributes
        for (let attribute in oldAttributes) {
            if (attributes[attribute]) {
                attrs[attribute] = attributes[attribute]
            }
        }

        return attrs;
    }

    setAttributes() {
        const parent = this
        const children = React.Children.toArray(this.props.children)

        function recursiveMap(children) {
            return React.Children.map(children, child => {
                if (!React.isValidElement(child)) {
                    return child;
                }

                if (child.props.children) {
                    child = React.cloneElement(child, {
                        children: recursiveMap(child.props.children)
                    });
                }

                if (child.props.formed === '1') {
                    if (!parent.state.attributes[child.props.name]) {
                        let newStateAttrs = parent.state.attributes;
                        newStateAttrs[child.props.name] = "";

                        parent.state.attributes = newStateAttrs;
                    }
                }
                return child;
            })
        }

        recursiveMap(children)
    }

    getChilds() {
        const parent = this
        const children = React.Children.toArray(this.props.children)

        function recursiveMap(children) {
            return React.Children.map(children, child => {
                if (!React.isValidElement(child)) {
                    return child;
                }

                if (child.props.children) {
                    child = React.cloneElement(child, {
                        children: recursiveMap(child.props.children)
                    });
                }

                //console.log('Child', child);

                if (child.props.formed === '1') {
                    child = React.cloneElement(child, {
                        value: parent.state.attributes[child.props.name],
                        errors: parent.state.errors[child.props.name],
                        onChange: parent.onChange,
                    })
                }
                return child;
            })
        }

        return recursiveMap(children);
    }

    componentDidMount() {
        this.setState({children: this.getChilds()});
    }


    render() {
        let props = {...this.props};

        delete props.onResponse;
        delete props.onRequest;

        return (
            <Form  {...props} onSubmit={this.onSubmit}>{this.state.children}</Form>
        );
    }
}

export default FormContainer;