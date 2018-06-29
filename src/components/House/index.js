import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Input, Segment, Header, TextArea, Card, Image, Label } from 'semantic-ui-react';
import './style.css';

class House extends Component {
    handleChange = (type) => (e) => {
        const {
            title, tel, email, housePrice, address, area, houseType, sellType, usage, description,
            pic1,
            pic2,
            pic3,
        } = this.props;
        this.props.onChange({
            title, tel, email, housePrice, address, area, houseType, sellType, usage, description,
            pic1,
            pic2,
            pic3,
            [type]: e.target.value,
        });
    }
    render() {
        const {
            title, tel, email, housePrice, address, area, houseType, sellType, usage, description,
            pic1,
            pic2,
            pic3,
        } = this.props;
        return (
            <div
                style={{
                    maxWidth: '900px',
                    margin: '40px auto',
                }}
                className="c-House"
            >
                <Segment
                    clearing
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fffff0',
                        }}
                    >
                        <Input
                            placeholder="标题"
                            transparent
                            size="large"
                            style={{
                                display: 'block',
                                marginBottom: '40px'
                            }}
                            value={title}
                            disabled={this.props.type === 'read'}
                            input={<input
                                style={{
                                    textAlign: 'left', fontSize: '28px',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('title')}
                        />
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <Input
                                placeholder="电话"
                                transparent
                                size="large"
                                style={{
                                    width: '100%',
                                    marginTop: this.props.type == 'write' ? '16px' : '0px',
                                }}
                                value={tel}
                                disabled={this.props.type === 'read'}
                                actionPosition="left"
                                onChange={this.handleChange('tel')}
                                labelPosition='right'
                            >
                                <Label
                                    basic
                                    style={{
                                        border: 'none',
                                        backgroundColor: '#fffff0',
                                        fontSize: '16px',
                                        display: this.props.type == 'write' ? 'none' : 'block',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    电话：
                                </Label>
                                <input style={{ textAlign: 'left', width: '100%' }} />
                            </Input>

                            <Input
                                placeholder="邮箱"
                                transparent
                                size="large"
                                style={{
                                    width: '100%',
                                    marginTop: this.props.type == 'write' ? '16px' : '0px',
                                }}
                                value={email}
                                disabled={this.props.type === 'read'}
                                actionPosition="left"
                                onChange={this.handleChange('email')}
                                labelPosition='right'
                            >
                                <Label
                                    basic
                                    style={{
                                        border: 'none',
                                        backgroundColor: '#fffff0',
                                        fontSize: '16px',
                                        display: this.props.type == 'write' ? 'none' : 'block',
                                        paddingLeft: 0,
                                        paddingRight: 0,
                                    }}
                                >
                                    邮箱：
                                </Label>
                                <input style={{ textAlign: 'left', width: '100%' }} />
                            </Input>

                            <div
                                style={{
                                    position: 'absolute',
                                    ...(!this.props.ifPaid && this.props.type === 'read'
                                        ? { height: '100%', width: '100%', top: '0', left: '0',
                                                background: '#fffff0' }
                                        : { display: 'none'}
                                    ),
                                }}
                            >
                                {this.props.children}
                            </div>
                        </div>

                        <Input
                            placeholder="价格"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: this.props.type == 'write' ? '16px' : '0px',
                            }}
                            value={housePrice}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('housePrice')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
                                    fontSize: '16px',
                                    display: this.props.type == 'write' ? 'none' : 'block',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                价格：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="地址"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: this.props.type == 'write' ? '16px' : '0px',
                            }}
                            value={address}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('address')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
                                    fontSize: '16px',
                                    display: this.props.type == 'write' ? 'none' : 'block',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                地址：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="户型：【例】3室1厅1厨1卫"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: this.props.type == 'write' ? '16px' : '0px',
                            }}
                            value={houseType}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('houseType')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
                                    fontSize: '16px',
                                    display: this.props.type == 'write' ? 'none' : 'block',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                户型：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="面积：【例】105平米"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: this.props.type == 'write' ? '16px' : '0px',
                            }}
                            value={area}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('area')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
                                    fontSize: '16px',
                                    display: this.props.type == 'write' ? 'none' : 'block',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                面积：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="租售方式：出租/出售"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: this.props.type == 'write' ? '16px' : '0px',
                            }}
                            value={sellType}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('sellType')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
                                    fontSize: '16px',
                                    display: this.props.type == 'write' ? 'none' : 'block',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                租售方式：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                        <Input
                            placeholder="房屋用途：商业办公/普通住宅"
                            transparent
                            size="large"
                            style={{
                                width: '100%',
                                marginTop: this.props.type == 'write' ? '16px' : '0px',
                            }}
                            value={usage}
                            disabled={this.props.type === 'read'}
                            actionPosition="left"
                            onChange={this.handleChange('usage')}
                            labelPosition='right'
                        >
                            <Label
                                basic
                                style={{
                                    border: 'none',
                                    backgroundColor: '#fffff0',
                                    fontSize: '16px',
                                    display: this.props.type == 'write' ? 'none' : 'block',
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                }}
                            >
                                房屋用途：
                            </Label>
                            <input style={{ textAlign: 'left', width: '100%' }} />
                        </Input>

                    </Segment>
                </Segment>

                <Segment
                    clearing
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fffff0',
                        }}
                    >
                        <Header
                            style={{
                                color: '#333'
                            }}
                            as='h2' content={this.props.type == 'write' ? '上传图片' : '图片展示'} />
                        <Input
                            placeholder="图片链接，请填写有效的图片地址（将作为首页图片展示）"
                            transparent
                            size="large"
                            style={{
                                display: this.props.type == 'write' ? 'block' : 'none',
                                marginBottom: '16px'
                            }}
                            value={pic1}
                            input={<input
                                style={{
                                    textAlign: 'left',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('pic1')}
                        />
                        <Input
                            placeholder="图片链接，请填写有效的图片地址"
                            transparent
                            size="large"
                            style={{
                                display: this.props.type == 'write' ? 'block' : 'none',
                                marginBottom: '16px'
                            }}
                            value={pic2}
                            input={<input
                                style={{
                                    textAlign: 'left',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('pic2')}
                        />
                        <Input
                            placeholder="图片链接，请填写有效的图片地址"
                            transparent
                            size="large"
                            style={{
                                display: this.props.type == 'write' ? 'block' : 'none',
                                marginBottom: '16px'
                            }}
                            value={pic3}
                            input={<input
                                style={{
                                    textAlign: 'left',
                                    color: '#333', width: '100%'
                                }}
                            />}
                            actionPosition="left"
                            onChange={this.handleChange('pic3')}
                        />
                        <Card.Group
                            itemsPerRow={3}
                            style={{
                                padding: '40px',
                            }}
                        >
                            <Card
                                style={{
                                    display: this.props.type == 'read' ? 'block' : 'none',
                                    marginTop: '16px'
                                }}
                            >
                                <Image src={pic1} />
                            </Card>
                            <Card
                                style={{
                                    display: this.props.type == 'read' ? 'block' : 'none',
                                    marginTop: '16px'
                                }}
                            >
                                <Image src={pic2} />
                            </Card>
                            <Card
                                style={{
                                    display: this.props.type == 'read' ? 'block' : 'none',
                                    marginTop: '16px'
                                }}
                            >
                                <Image src={pic3} />
                            </Card>
                        </Card.Group>
                    </Segment>
                </Segment>

                <Segment
                    style={{
                        backgroundColor: '#fffff0',
                    }}
                >
                    <Segment
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            backgroundColor: '#fffff0',
                        }}
                    >
                        <Header
                            style={{
                                color: '#333'
                            }}
                            as='h2' content="房屋描述" />
                        <TextArea
                            autoHeight
                            value={description}
                            style={{ minHeight: 200, width: '100%', backgroundColor: '#fffff0', }}
                            placeholder="【例】家具齐全，拎包入住，随时看房。"
                            disabled={this.props.type === 'read'}
                            onChange={this.handleChange('description')}
                        />
                    </Segment>
                </Segment>


            </div>
        );
    }
}

House.propTypes = {};
House.defaultProps = {
    type: 'write',
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
    ifPaid: true,
    onChange: () => {},
};

export default House;
