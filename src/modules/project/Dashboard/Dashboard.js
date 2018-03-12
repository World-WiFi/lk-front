import React, {Component} from 'react';
import {connect} from 'react-redux'


import {
    Row,
    Col,
    Card,
    Progress,
    CardBody,
    CardHeader,
    Button,
} from 'reactstrap';


import {CATEGORIES} from "../../../constants/routers";
import {CATEGORIES2} from "../../../constants/routers";
import {DATA_CHARTS} from "../../../constants/routers";


import ListBox from "../../base/components/theme/ListBox";
import ChannelSlider from "./components/ChannelSlider/";


import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList
} from 'recharts';


import t from '../../base/components/multilang/MultiLang/MultiLangT'

import {green50, red50} from 'material-ui/styles/colors';

/*

const ages = function getAge(start, end, step) {
    let ages = [];

    for (let i = start; i < end; i += step) {
        ages.push({value: i, name: i})
    }
    return ages
}
*/

class Dashboard extends Component {
    componentDidMount = () => {
        document.title = "Главная";
    }

    subLeng(categories)
    {
        const parent  = this
        return categories.map(function (category) {
            console.log(category, t(parent))
            category.name = t(parent).categories[category.nameL];
            return category
        })
    }

    render() {
        const DATA_CHARTS2 = DATA_CHARTS.map(a => Object.assign({}, a));
        return (
            <div className="animated fadeIn">

                <Card className="card-accent-primary">

                    <CardBody>

                        <Row>
                            <Col xs="12" sm="12" lg="2"></Col>

                            <Col xs="12" sm="6" lg="2">
                                <Card className="text-white bg-primary">
                                    <CardBody className="pb-0">
                                        <h4 className="mb-0"><i className="fa fa-users"/> 139</h4>
                                        <p>{t(this).statistics.countConnectedUsers}</p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs="12" sm="12" lg="2">
                                <Card className="text-white bg-primary">
                                    <CardBody className="pb-0">
                                        <h4 className="mb-0"><i className="fa fa-crosshairs"/> 234 287</h4>
                                        <p>{t(this).statistics.theNumberOfEarnedTokens}</p>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs="12" sm="12" lg="6">

                                <Card className="text-white bg-primary">
                                    <CardBody className="pb-0">
                                        <Row>
                                            <Col sm="12" lg="4">

                                                <h4 className="mb-0"><i className="fa fa-credit-card"/> 2123.80</h4>
                                                <p>{t(this).statistics.incomeFromReferrals}</p>

                                            </Col>
                                            <Col sm="12" lg="4">

                                                <h4 className="mb-0"><i className="fa fa-credit-card"/> 2123.80</h4>
                                                <p>{t(this).statistics.incomeFromRouter}</p>

                                            </Col>
                                            <Col sm="12" lg="4">

                                                <h4 className="mb-0"><i className="fa fa-credit-card"/> 9023.80</h4>
                                                {t(this).statistics.balance}

                                                <Button type="submit" color="success" className="pull-right">
                                                    <i className="fa fa-dollar"/> {t(this).other.withdrawMoney}
                                                </Button>

                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>


                        </Row>

                        <Row>
                            <Col xs="12" lg="6">

                                <h3>{t(this).statistics.numberOfConnections}</h3>

                                <div className="area-chart-wrapper" style={{width: '100%', height: '400px'}}>
                                    <ResponsiveContainer>
                                        <LineChart
                                            width={600} height={400} data={DATA_CHARTS.map(function (element) {
                                            element.count = element.count / 10
                                            return element;
                                        })}
                                            margin={{top: 40, right: 40, bottom: 20, left: 20}}
                                        >
                                            <CartesianGrid vertical={false}/>
                                            <XAxis dataKey="date" label=""/>
                                            <YAxis domain={['auto', 'auto']} label=""/>
                                            <Tooltip/>
                                            <Line dataKey="count" stroke="#387908" dot={false}/>
                                            <Brush dataKey="date" startIndex={DATA_CHARTS.length - 40}>
                                                <AreaChart>
                                                    <CartesianGrid/>
                                                    <YAxis hide domain={['auto', 'auto']}/>
                                                    <Area dataKey="count" stroke="#387908" fill="#387908" dot={false}/>
                                                </AreaChart>
                                            </Brush>
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <hr/>

                                <h3>{t(this).statistics.numberOfImpressions}</h3>

                                <div className="area-chart-wrapper" style={{width: '100%', height: '400px'}}>
                                    <ResponsiveContainer>
                                        <LineChart
                                            width={600} height={400} data={DATA_CHARTS2.reverse()}
                                            margin={{top: 40, right: 40, bottom: 20, left: 20}}
                                        >
                                            <CartesianGrid vertical={false}/>
                                            <XAxis dataKey="date" label=""/>
                                            <YAxis domain={['auto', 'auto']} label=""/>
                                            <Tooltip/>
                                            <Line dataKey="count" stroke="#ff7300" dot={false}/>
                                            <Brush dataKey="date" startIndex={DATA_CHARTS2.length - 40}>
                                                <AreaChart>
                                                    <CartesianGrid/>
                                                    <YAxis hide domain={['auto', 'auto']}/>
                                                    <Area dataKey="count" stroke="#ff7300" fill="#ff7300" dot={false}/>
                                                </AreaChart>
                                            </Brush>
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </Col>
                            <Col xs="12" lg="6">

                                <Card>
                                    <CardHeader>
                                        <i className="fa fa-signal"/> {t(this).channel.distribution}
                                    </CardHeader>
                                    <CardBody>
                                        <ChannelSlider
                                            min={0}
                                            max={100}
                                            step={1}
                                            volume={20}
                                        />
                                    </CardBody>
                                </Card>

                                {/* <Card>
                                    <CardHeader>
                                        Аудитория
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col lg="6">
                                                <Row>
                                                    <Col lg="4">
                                                        <label><strong>Пол</strong></label>
                                                    </Col>
                                                    <Col lg="8">
                                                        <Row>
                                                            <Col lg="6">
                                                                <CheckBoxList name="М" checked={true}/>
                                                            </Col>
                                                            <Col lg="6">
                                                                <CheckBoxList name="Ж" checked={true}/>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <hr/>
                                                <Row>
                                                    <Col lg="4">
                                                        <label><strong>Возраст</strong></label>
                                                    </Col>
                                                    <Col lg="8">
                                                        <Row>
                                                            <Col lg="6">
                                                                <Select floatingLabelText="с" value={18}
                                                                        items={ages(12, 80, 2)}/>
                                                            </Col>
                                                            <Col lg="6">
                                                                <Select floatingLabelText="по" value={50}
                                                                        items={ages(12, 80, 2)}/>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
*/}
                                <Card>
                                    <CardHeader className="bg-success">
                                        <i className="fa fa-align-justify"></i>
                                        <strong>{t(this).filters.preferredInterests}</strong>
                                        <small> +</small>
                                    </CardHeader>
                                    <CardBody>
                                        <ListBox items={this.subLeng(CATEGORIES)} color={green50} identity="GREEN"/>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardHeader className="bg-danger">
                                        <i className="fa fa-align-justify"></i>
                                        <strong>{t(this).filters.prohibitedInterests}</strong>
                                        <small> -</small>
                                    </CardHeader>
                                    <CardBody>
                                        <ListBox items={this.subLeng(CATEGORIES2)} color={red50} identity="RED"/>
                                    </CardBody>
                                </Card>
                            </Col>


                        </Row>


                    </CardBody>
                </Card>


            </div>
        )
    }
}


const mapStateToProps = state => {//state => ({ lang: state.lang })
    return {
        lang: state.lang
    }
}


export default connect(mapStateToProps)(Dashboard);
