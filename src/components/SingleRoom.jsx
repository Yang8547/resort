import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/banner';
import InnerBanner from '../components/InnerBanner';
import {Link} from 'react-router-dom';
import {RoomContext, RoomConsumer} from '../context';

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        }
    }
    static contextType = RoomContext;
    // componentDidMount() {

    // }
    render() { 
        const contextObj = this.context;
        const roomInfo = contextObj.getRoom(this.state.slug);
        if(!roomInfo){
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }
        return ( 
            <Banner hero="roomsHero">
            <InnerBanner title={`${roomInfo.name} room`}>
            <Link to="./rooms" className="btn-primary">
            back to Room
            </Link>
            </InnerBanner>
            </Banner>
         );
    }
}
 
export default SingleRoom;