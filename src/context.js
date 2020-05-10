import React, { Component } from 'react';
import datas from './data';

const RoomContext = React.createContext();
// <RoomContext.Provider value={}
// 放到在外面 value值能被所有订阅者访问，通过import context


class RoomProvider extends Component {
    state = { 
       rooms:[],
       sortedRooms:[],
       featuredRooms:[],
       loading:true
    };
    // getData

    componentDidMount() {
        // this.getData
        let rooms = this.formatData(datas);
        let featuredRooms = rooms.filter(room => room.featured===true);
        this.setState({
            rooms: rooms,
            featuredRooms: featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
         console.log(rooms);
    }

    formatData(datas) {
        let tempItems = datas.map(item => {
            let id = item.sys.id;
            let images_url = item.fields.images.map(image => image.fields.file.url);
            // deconstruct room fields 改写images项，加入id
            let room = {...item.fields,images:images_url,id:id};
            return room
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }

    render() { 
        return ( 
            <RoomContext.Provider value={{...this.state,
            getRoom:this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
 
export { RoomProvider, RoomConsumer, RoomContext };