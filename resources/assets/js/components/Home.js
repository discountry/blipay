import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Card, Grid, Steps } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Home.css'

const Step = Steps.Step;

const actionIcons = [{
    icon: '',
    text: '快捷付款',
    link: '/pay'
}, {
    icon: '',
    text: '扫码收款',
    link: '/receive'
}]

export default class Home extends Component {
    render() {
        return (
            <div className="flex-container">
                <div className="page-title">
                    <img alt="altfolio-icon" src="https://png.icons8.com/ultraviolet/80/000000/bitcoin.png" />
                    <h2>Blipay</h2>
                </div>
                <WingBlank size="lg">
                <Card>
                <Card.Header
                    title="Satoshi"
                    thumb="https://png.icons8.com/ultraviolet/80/000000/user.png"
                    extra={<span>123</span>}
                />
                <Card.Body>
                    <div>
                        <span>余额（BCH）</span>
                        <p>100.00</p>
                    </div>
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <Card>
                <Card.Body>
                    <Grid data={actionIcons} columnNum={2} itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }} renderItem={dataItem => (
                        <Link to={dataItem.link} style={{ padding: '12.5px' }}>
                        <img src={dataItem.icon} style={{ width: '15px', height: '15px' }} alt="" />
                        <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                            <span>{dataItem.text}</span>
                        </div>
                        </Link>
                    )} />
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <Steps size="small" current={1}>
                <Step title="Finished" description="This is description" />
                <Step title="In Progress" description="This is description" />
                <Step title="Waiting" description="This is description" />
                </Steps>
                </WingBlank>
            </div>
        )
    }
}
