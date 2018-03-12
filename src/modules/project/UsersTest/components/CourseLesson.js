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


class CourseLesson extends Component {
    getStatusClass = () => {
        let className;
        switch (this.props.item.status) {
            case 0:
                className = 'step-empty'
                break;
            case 1:
                className = 'step-work'
                break;
            case 3:
                className = 'step-end'
                break;
        }
        return className
    }

    render() {
        return (

            <li>
                <p className="timeline-date">2007</p>
                <div className={`timeline-content ${this.getStatusClass()}`}>
                    <h3>{this.props.item.name}</h3>
                    <p>{this.props.item.name}{this.props.item.name}<br/><br/>className</p>
                </div>
            </li>
        )
    }
}

export default CourseLesson;
