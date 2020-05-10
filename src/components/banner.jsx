import React, { Component } from 'react';

class Banner extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( <header className={this.props.hero}>
            {this.props.children}
            </header> );
    }
}
Banner.defaultProps = {
    hero: "defaultHero"
}
 
export default Banner;