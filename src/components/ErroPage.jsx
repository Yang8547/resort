import React, { Component } from 'react';
import Banner from './banner';
import InnerBanner from '../components/InnerBanner';
import {Link} from "react-router-dom";

class ErroPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Banner>
                <InnerBanner title="404"
                subtitle="Page not found">
                <Link to="/" className="btn-primary">
                    back to home
                </Link>
                </InnerBanner>
            </Banner>
         );
    }
}
 
export default ErroPage;