import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
    Menu,
} from 'semantic-ui-react';

class Header extends Component {
    handleSwitchPage = (pageUrl) => () => {
        this.props.history.push(pageUrl)
    }
    render() {
        return (
            <Menu
                style={{
                    marginTop: 0,
                    borderRadius: '0'
                }}
                secondary
                stackable
            >
                <Menu.Item
                    style={{
                        color: '#39beff',
                        fontSize: '24px'
                    }}
                >
                    星云HOUSE
                </Menu.Item>
                <Menu.Item
                    name='editorials'
                    active={this.props.location.pathname === '/'}
                    onClick={this.handleSwitchPage('/')}
                    style={{
                        color: '#c1eeff',
                        fontSize: '16px'
                    }}
                >
                    最新房源
                </Menu.Item>

                <Menu.Item
                    name='reviews'
                    active={this.props.location.pathname === '/post'}
                    onClick={this.handleSwitchPage('/post')}
                    style={{
                        color: '#c1eeff',
                        fontSize: '16px'
                    }}
                >
                    发布房源
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    active={this.props.location.pathname === '/about'}
                    onClick={this.handleSwitchPage('/about')}
                    style={{
                        color: '#c1eeff',
                        fontSize: '16px'
                    }}
                >
                    用户须知
                </Menu.Item>

                <Menu.Item>
                    <a
                        style={{
                            color: '#c1eeff',
                            fontSize: '16px'
                        }}
                        href="mailto:xingyunhouse@163.com"
                    >联系我们</a>
                </Menu.Item>
            </Menu>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default withRouter(Header);
