import React, {Component} from 'react';
import { Modal, Button, Icon, Input } from 'semantic-ui-react';
import PageHeader from '../../components/Header';
import { postHouse } from '../../dataAdapter';
import House from '../../components/House';

class PostHouse extends Component {
    state = {
        title: '',
        tel: '',
        email: '',
        housePrice : '',
        address: '',
        area: '',
        houseType: '',
        sellType: '',
        usage: '',
        description: '',
        pic1: '',
        pic2: '',
        pic3: '',
        price: '',
        ifPriceDialogOpen: false,
        ifTransactionDelayNoteDialogOpen: false,
    }

    handleTriggerOpenPriceDialog = () => {
        this.setState({
            ifPriceDialogOpen: true,
        })
    }
    handleCloseTransactionDelatNoteDialog = () => {
        this.setState({
            ifTransactionDelayNoteDialogOpen: false,
        })
    }
    handleChange = (s) => {
        this.setState({
            ...s
        });
    }
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value,
        })
    }
    handleSubmit = () => {
        const { title, tel, email, housePrice, address, area, houseType, sellType, usage, description,
            pic1,
            pic2,
            pic3, price } = this.state;

        postHouse(title, tel, email, housePrice, address, area, houseType, sellType, usage, description,
            pic1,
            pic2,
            pic3, Number(price))
            .then((res) => {
                this.setState({
                    ifPriceDialogOpen: false,
                    ifTransactionDelayNoteDialogOpen: true,
                })
            })
    }
    handleCancelSubmit = () => {
        this.setState({
            ifPriceDialogOpen: false,
        })
    }
    render() {
        return (
            <div>
                <PageHeader />
                <House type="write" {...this.state} onChange={this.handleChange} />
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <Modal
                        open={this.state.ifPriceDialogOpen}
                        trigger={
                            <Button
                                onClick={this.handleTriggerOpenPriceDialog}
                                disabled={!this.state.title || !(this.state.tel || this.state.email)}
                                style={{
                                    width: '200px'
                                }}
                            >发布</Button>
                        }>
                        <Modal.Header
                            style={{
                                textAlign: 'center',
                                width: '100%',
                                backgroundColor: '#fffff0'
                            }}
                        >设置付费金额</Modal.Header>
                        <Modal.Content
                            style={{
                                textAlign: 'center',
                                backgroundColor: '#fffff0'
                            }}
                        >
                            <Input
                                value={this.state.price}
                                onChange={this.handleChangePrice}
                                style={{
                                    backgroundColor: '#fffff0'
                                }}
                            /> NAS
                            <div
                                style={{
                                    textAlign: 'center',
                                    marginTop: '24px'
                                }}
                            >* 其他用户只有支付相应的金额才能查看您的联系方式</div>
                        </Modal.Content>
                        <Modal.Actions
                            style={{
                                textAlign: 'center',
                                backgroundColor: '#fffff0'
                            }}
                        >
                            <Button
                                onClick={this.handleCancelSubmit}
                            >
                                <Icon name='remove' /> 取消
                            </Button>
                            <Button
                                onClick={this.handleSubmit}
                                disabled={isNaN(Number(this.state.price)) || !this.state.price}
                            >
                                <Icon name='checkmark' /> 确定
                            </Button>

                        </Modal.Actions>
                    </Modal>
                    <Modal
                        style={{
                            backgroundColor: '#fffff0'
                        }}
                        open={this.state.ifTransactionDelayNoteDialogOpen}
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
                            简历内容写到链上需要15s左右的时间
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
            </div>
        );
    }
}

PostHouse.propTypes = {};
PostHouse.defaultProps = {};

export default PostHouse;
