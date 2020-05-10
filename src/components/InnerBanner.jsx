import React, { Component } from 'react';

class InnerBanner extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="banner">
                <h1>{this.props.title}</h1>
                <div></div>
                <p>{this.props.subtitle}</p>
                {this.props.children}
            </div>
        );
    }
}
 
export default InnerBanner;