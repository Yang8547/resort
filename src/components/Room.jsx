import React, { Component } from 'react';
import {Link} from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from 'prop-types';

class Room extends Component {
    constructor(props){
        super(props);
    }
    state = {  }
    render() {
        // console.log(this.props.room);
    
        return ( <article className="room">
            <div className="img-container">
                <img src={this.props.room.images[0] || defaultImg} alt=""/>
                <div className="price-top">
                    <h6>${this.props.room.price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${this.props.room.slug}`} className="btn-primary room-link">Featured</Link>
            </div>
            <p className="room-info">{this.props.room.name}</p>
        </article> );
    }
}

// validation
Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}
 
export default Room;