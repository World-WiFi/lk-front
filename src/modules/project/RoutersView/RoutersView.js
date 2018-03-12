import React, {Component} from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Badge,
    Progress,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';

import classnames from 'classnames';

import {ROUTERS} from '../../../constants/routers';
import {CATEGORIES} from '../../../constants/routers';

import TimePicker from 'react-time-picker';

class TimePickerRange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '10:00',
        }

        this.onChange = this.onChange.bind(this);

    }

    onChange(time) {
        this.setState({
            time: time
        })
    }

    render() {
        return (
            <div>
                <TimePicker
                    onChange={this.onChange}
                    value={this.state.time}
                />
            </div>
        );
    }
}


import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import ListBox from "../../base/components/theme/ListBox";

class SliderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: 5
        };

        this.handleOnChange = this.handleOnChange.bind(this);

    }

    handleOnChange(value) {
        this.setState({
            volume: value
        })
    }

    render() {
        let {volume} = this.state

        return (
            <div>
                <Progress multi>
                    <Progress bar color="success" value={this.state.volume} min={this.props.min} max={this.props.max}>{this.state.volume} %</Progress>
                </Progress>
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={volume}
                    onChange={this.handleOnChange}
                />
            </div>
        )
    }
}


class RouterViewsInner extends Component {

    render() {
        console.log(ROUTERS);

        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-primary">
                            <CardBody className="pb-0">
                                <h4 className="mb-0">234 287</h4>
                                <p>Показы</p>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                                <h4 className="mb-0">9023.80</h4>
                                <p>Доход</p>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                                <h4 className="mb-0">---</h4>
                                <p>DATA</p>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-danger">
                            <CardBody className="pb-0">
                                <h4 className="mb-0">---</h4>
                                <p>DATA</p>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardHeader>
                                Информация по роутеру
                            </CardHeader>
                            <CardBody>
                                Описание
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader>
                                Время работы гостевой сети
                            </CardHeader>
                            <CardBody>
                                <TimePickerRange/>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col xs="12" sm="6" lg="6">

                        <Card>
                            <CardHeader>
                                %
                            </CardHeader>
                            <CardBody>
                                <Progress multi>
                                    <Progress ref="progressBar" bar color="success" value="15" max={55}>15 %</Progress>
                                </Progress>
                            </CardBody>
                        </Card>


                        <Card>
                            <CardHeader>
                                Ограничене канала
                            </CardHeader>
                            <CardBody>
                                <SliderComponent
                                    min={1}
                                    max={100}
                                    step={1}
                                />
                            </CardBody>
                        </Card>


                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Фильтр по интересам</strong>
                                <small> выбор</small>
                            </CardHeader>
                            <CardBody>

                                <ListBox items={CATEGORIES}/>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>

        )
    }
}


class RoutersView extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            <i className="fa fa-wifi"></i> <span> Гостевая сеть </span>{'\u00A0'}<Badge
                            color="success">New</Badge>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            <i className="fa fa-lock"></i> <span> Сеть</span>{'\u00A0'}<Badge pill
                                                                                              color="danger">29</Badge>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <RouterViewsInner/>
                    </TabPane>
                    <TabPane tabId="2">
                        <RouterViewsInner/>
                    </TabPane>
                </TabContent>
            </div>

        )
    }

}

export default RoutersView;
