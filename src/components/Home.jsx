import React, { Component } from 'react';
import Banner from '../components/banner';
import InnerBanner from '../components/InnerBanner';
import Services from '../components/services';
import FeaturedRoom from '../components/FeatureRoom'
import {Link} from "react-router-dom";

class Home extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Banner>
                    <InnerBanner title="Luxurious Rooms"
                    subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                    </InnerBanner>
                </Banner>
                <Services />
                <FeaturedRoom/>
            </React.Fragment>
            
         );
    }
}
 
export default Home;