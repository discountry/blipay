import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Card, List, InputItem, Button } from 'antd-mobile'

export default class Receive extends Component {
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
                    title="2N2Ww3EPc9gC8hPycHn8rxZLjy1eEfsbw5y"
                />
                <Card.Body>
                <List renderHeader={() => 'Customize the extra content in the right'}>
                <InputItem
                    placeholder="0.00"
                    extra="¥"
                >金额</InputItem>
                </List>
                </Card.Body>
                </Card>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Button><a href="/api/signal/123">扫码收款</a></Button>
                </WingBlank>
            </div>
        )
    }
}
