import React from 'react';

import Slogen from "../components/Slogen";
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';


const rematchPage = (Page, pageInfo, isMajorPage) => () => (
    <div style={isMajorPage ? { marginBottom: '80px' } : { marginTop: '60px' }}>
        {
            isMajorPage
                ? null
                : <TopNav {...pageInfo} />
        }
        {
            isMajorPage
                ? <Slogen />
                : null
        }
        <Page />

        {
            isMajorPage
                ? <BottomNav />
                : null
        }
    </div>
);

export default rematchPage;