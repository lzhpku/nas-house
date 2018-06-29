import React, {Component} from 'react';
import PropTypes from 'prop-types';
import House from '../../components/House';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import PageHeader from '../../components/Header';

import { getHouse, checkHouse } from '../../dataAdapter';

class PersonHouse extends Component {
    state = {
        ifWaitforWriteChainDialogOpen: false
    }
    componentDidMount() {
        // fetch data

        getHouse(this.props.match.params.houseId)
            .then(res => {
                this.setState({
                    ...res.house,
                })
            })
    }
    handlePay = () => {
        checkHouse(this.props.match.params.houseId, this.state.price)
            .then(res => {
                this.setState({
                    ifWaitforWriteChainDialogOpen: true,
                })
            })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifWaitforWriteChainDialogOpen: false,
        })
    }
    render() {
        return (
            <div>
                <PageHeader />
                <House
                    type="read"
                    {...this.state}
                >
                    <Button
                        color='twitter'
                        style={{
                            borderRadius: '0',
                            backgroundColor: '#39beff',
                            width: '100%'
                        }}
                        onClick={this.handlePay}
                    >
                        <Icon name='expeditedssl' />
                        支付{this.state.price}NAS查看房主联系方式
                    </Button>
                </House>
                <Modal
                    open={this.state.ifWaitforWriteChainDialogOpen}
                    style={{
                        backgroundColor: '#fffff0'
                    }}
                >
                    <Modal.Header
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fffff0'
                        }}
                    >
                        注意
                    </Modal.Header>
                    <Modal.Content
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fffff0'
                        }}
                    >
                        交易需要15s左右的时间才能达成，请过一会刷新查看
                    </Modal.Content>
                    <Modal.Actions
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#fffff0'
                        }}
                    >
                        <Button
                            onClick={this.handleCloseTransactionDelatNoteDialog}
                        >确定</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

PersonHouse.propTypes = {};
PersonHouse.defaultProps = {};

export default withRouter(PersonHouse);
