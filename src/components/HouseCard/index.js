import React, { Component } from 'react';
import { Card, Label, Image, Icon } from 'semantic-ui-react';

import { withRouter } from 'react-router';

class HouseCard extends Component {

    handleClick = () => {
        this.props.history.push(`/house/${this.props.houseId}`);
    }
    render() {
        const { title, housePrice, address, sellType, pic1, createTime, paidCount} = this.props;
        return (
            <Card
                onClick={this.handleClick}
            >
                <Image
                    src={pic1} />
                <Card.Content
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Card.Header>
                        { title }
                    </Card.Header>
                    <Card.Description>
                        { housePrice }
                    </Card.Description>
                    <Card.Description>
                        { sellType }
                    </Card.Description>
                    <Card.Description>
                        { address }
                    </Card.Description>
                    <Card.Description>
                        发布于 { new Date(createTime).toDateString() }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra
                              style={{
                                  backgroundColor: '#fffff0',
                              }}
                >
                    <div>
                        <Icon name='user' />
                        已有{ paidCount }人付费查看
                    </div>
                </Card.Content>
            </Card>
        )
    }
}

HouseCard.defaultProps = {
    title: '',
    housePrice: '',
    address: '',
    sellType: '',
    pic1: '',
    createTime: '',
    paidCount: 0,
    houseId: ''
};

export default withRouter(HouseCard);
