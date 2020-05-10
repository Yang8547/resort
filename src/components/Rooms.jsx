import React, { Component } from 'react';
import Banner from './banner';
import InnerBanner from '../components/InnerBanner';
import {Link} from "react-router-dom";

class Rooms extends Component {
    
    render() { 
        return ( 
        <Banner hero="roomsHero">
            <InnerBanner title="Our Rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </InnerBanner>
        </Banner>
         );
    }
}
 
export default Rooms;