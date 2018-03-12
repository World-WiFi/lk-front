import React, {Component} from 'react';
import { connect } from 'react-redux'


import t from '../../../modules/base/components/multilang/MultiLang/MultiLangT'
import nav from '../_nav';

import {
    Row,
    Col,
    Progress,
} from 'reactstrap';



class NavMultilang extends Component {
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
                        <strong className="text-success">{t(this).channel.home} <small className="text-muted">{this.state.homePercent} %</small></strong>
                    </Col>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = state => ({ lang: state.lang })


export default  connect(mapStateToProps)(NavMultilang);
