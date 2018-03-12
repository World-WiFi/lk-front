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
import CourseLesson from "./CourseLesson";


class CourseBlock extends Component {
    state = {open: true}

    toggle = () => this.setState({open: !this.state.open})

    render() {

        console.log('asda', this.props)

        return (
            <div className="course-timeline-block-container mb-5">

                <div className="course-timeline-block" onClick={this.toggle}>
                    <strong>{this.props.item.name}</strong>

                    <div className="card-actions">
                        <i className={`fa fa-${this.state.open ? 'minus-square' : 'plus -square'}`}/>
                    </div>

                </div>
                <div className={!this.state.open ? 'd-none' : ''}>

                    <ul className="timeline">

                        {this.props.item.lessons.map((lesson) => <CourseLesson key={lesson.id} item={lesson}/>)}

                    </ul>

                </div>

            </div>
        )
    }
}

export default CourseBlock;
