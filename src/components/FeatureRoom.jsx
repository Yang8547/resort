import React, { Component } from 'react';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

// 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
// 这能让你使用 this.context 来消费最近 Context 上的那个值。
// https://zh-hans.reactjs.org/docs/context.html

class FeaturedRoom extends Component {
    static contextType = RoomContext;
    state = {  }
    render() {
        // 这个contextObj(this.context)就可以拿到provider value中的所有内容了
        const contextObj = this.context;
        // 或者只拿featured rooms
        // const {featuredRooms} = this.context;
        // log(featuredRooms)

        // console.log(value.featuredRooms);

        const rooms = contextObj.featuredRooms.map(room => {
            return <Room key={room.id} room={room} />
        })
        
        return ( 
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {contextObj.loading?<Loading/>:rooms}
                </div>
            </section>
        );
    }
}
 
export default FeaturedRoom;