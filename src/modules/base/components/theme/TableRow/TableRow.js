import React, {Component} from 'react';

import {
    Button
} from 'reactstrap';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: this.props.row,
            attributes: Object.keys(this.props.columns)
        };
    }

    render() {
        //console.log(this.props.loading);
        const parent = this;
        return (
            <tr {...this.props}>
                {this.state.attributes.map(function (attribute) {
                    console.log(attribute);
                    return <td key={attribute}>{parent.state.row[attribute]}</td>;
                })}
                <td className="text-center" width="100px">
                    <Button color="primary" className="btn-sm"><i className="fa fa-pencil" /></Button>
                    <Button color="danger" className="btn-sm"><i className="fa fa-trash" /></Button>
                </td>
            </tr>
        );
    }
}

export default TableRow;