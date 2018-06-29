import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment, Header, TextArea,
    Button, Modal, Icon,
    Label, Image, Sidebar,
    Grid, Card, Responsive,
} from 'semantic-ui-react';
import { withRouter } from 'react-router';
import HouseCard from '../../components/HouseCard';
import PageHeader from '../../components/Header';
import { detectScreenType } from '../../utils';

import { getHouseList } from '../../dataAdapter';

class Homepage extends Component {
    perRowMap = {
        mobile: 1,
        pad: 2,
        pc: 4,
    }
    state = {
        curPage: 1,
        perRow: 4,
        list: [],
    }
    componentDidMount() {
        getHouseList(this.state.curPage)
            .then(res => {
                this.setState({
                    list: res.list.reverse(),
                })
            })

        this.setState({
            perRow: this.perRowMap[detectScreenType(window.innerWidth)]
        })

        window.onresize = () => {
            this.setState({
                perRow: this.perRowMap[detectScreenType(window.innerWidth)]
            })
        }
    }
    render() {
        return (
            <div>
                <PageHeader />
                <Card.Group
                    itemsPerRow={this.state.perRow}
                    style={{
                        padding: '40px',
                    }}
                >
                    {
                        this.state.list.map(item => (
                            <HouseCard
                                key={item.houseId}
                                {...item}
                            />
                        ))
                    }
                </Card.Group>
            </div>
        );
    }
}

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default withRouter(Homepage);
