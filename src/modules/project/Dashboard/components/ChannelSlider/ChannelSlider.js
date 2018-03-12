import React, {Component} from 'react';
import { connect } from 'react-redux'


import t from '../../../../base/components/multilang/MultiLang/MultiLangT'

import {
    Row,
    Col,
    Progress,
} from 'reactstrap';


import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

class ChannelSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: this.props.volume,
            homePercent: 100 - this.props.volume,
            guestPercent: this.props.volume,
        };

        this.handleOnChange = this.handleOnChange.bind(this);

    }

    handleOnChange(value) {
        this.setState({
            volume: value,
            homePercent: 100 - value,
            guestPercent: value,
        })
    }

    render() {
        let {volume} = this.state

        return (
            <div>
                <Progress multi color="success">
                    <Progress bar color="default" value={this.state.volume} min={this.props.min}
                              max={this.props.max}>{this.state.volume} %
                    </Progress>
                </Progress>
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={volume}
                    onChange={this.handleOnChange}
                />
                <Row>
                    <Col sm="6">
                        <strong className="text-muted">{t(this).channel.guest} <small className="text-muted">{this.state.guestPercent} %</small></strong>
                    </Col>
                    <Col sm="6" className="text-right">
                        <small className="text-muted">{this.state.homePercent} %</small> <strong className="text-success">{t(this).channel.home}</strong>
                    </Col>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = state => ({ lang: state.lang })


export default  connect(mapStateToProps)(ChannelSlider);
