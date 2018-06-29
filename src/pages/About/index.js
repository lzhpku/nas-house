import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import PageHeader from '../../components/Header';

class About extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <div style={{
                    padding: '0 40px',
                    color: '#c1eeff',
                    fontSize: '14px'
                }}>
                    <div>
                        星云HOUSE是一个基于星云链的房屋信息发布、托管与共享平台，房主可以在平台上发布租房、售房信息，用户通过支付用户预先设定的NAS价格获取房主的联系方式。
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>星云HOUSE的特点与优势：</h3>
                        <List>
                            <List.Item>
                                1. 房屋数据写入区块链，可以保证数据的透明公开可查；
                            </List.Item>
                            <List.Item>
                                2. 通过智能合约，用户的NAS直接转入房主账户，避免了各种房屋中介平台在沟通过程中乱收中介费的现象；
                            </List.Item>
                            <List.Item>
                                3. 通过支付NAS的方式，免除了房屋中介对用户的骚扰，提高了房主与用户的沟通效率；
                            </List.Item>
                        </List>
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>使用须知：</h3>
                        <List>
                            <List.Item>
                                1. 星云HOUSE提供房源信息托管与溯源服务，主要解决现有平台在房主与用户沟通时，中介方由于信息优势乱收费的现象，但无法保证房源信息真实可靠。平台的信息来自房主本人，请用户务必认真核实，因信息不实造成的损失由用户自行承担。
                            </List.Item>
                            <List.Item>
                                2. 房源发布流程：点击"发布房源"，填写房源信息与图片链接，设置联系方式支付金额后发起交易即可。
                            </List.Item>
                            <List.Item>
                                3. 星云HOUSE基于星云链生态的开发，从您体验和账号安全的角度考虑，请您在使用前先安装
                                <a href="https://github.com/ChengOrangeJu/WebExtensionWallet"
                                   style={{
                                       color: '#39beff',
                                   }}
                                >NAS钱包插件</a>。
                            </List.Item>
                        </List>
                    </div>

                    <div
                        style={{
                            paddingTop: '40px'
                        }}
                    >
                        <h3>星云HOUSE，房主多赚NAS，用户少花NAS，打造区块链+住房第一品牌！</h3>
                    </div>

                </div>
            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};

export default About;
