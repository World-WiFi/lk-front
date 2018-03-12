import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Badge,
    Table,
    Button
} from 'reactstrap';

import blocks from './blocks'
import CourseBlock from "./components/CourseBlock";

require("./style.css");

class UsersTest extends Component {
    static defaultProps = {
        item: {
            name: 'Наименование',
            description: 'Описание',
            start_at: '2018-01-20',
            status: 1,
            blocks: blocks
        }
    }

    render() {

        console.log(this.props)

        return (
            <div className="animated fadeIn">

                <Card className="card-accent-primary">
                    <CardHeader>
                        <h3>{this.props.item.name}</h3>
                    </CardHeader>
                    <CardBody>

                        <p>{this.props.item.description}</p>
                        <hr/>

                        {this.props.item.blocks.map((block) => <CourseBlock key={block.id} item={block} />)}

                    </CardBody>
                </Card>

            </div>
        )
    }

}

export default UsersTest;
