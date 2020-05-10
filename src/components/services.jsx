import React, { Component } from 'react';
import { FaCocktail,FaBeer,FaHiking,FaShuttleVan } from 'react-icons/fa'
import Title from './Title';

class Services extends Component {
    state = { 
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim molestiae tempore optio ipsa placeat iusto eius nobis suscipit non vitae tempora quibusdam exercitationem, blanditiis excepturi molestias assumenda doloribus sed!"
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim molestiae tempore optio ipsa placeat iusto eius nobis suscipit non vitae tempora quibusdam exercitationem, blanditiis excepturi molestias assumenda doloribus sed!"
            },
            {
                icon:<FaShuttleVan />,
                title:"free Shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim molestiae tempore optio ipsa placeat iusto eius nobis suscipit non vitae tempora quibusdam exercitationem, blanditiis excepturi molestias assumenda doloribus sed!"
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi enim molestiae tempore optio ipsa placeat iusto eius nobis suscipit non vitae tempora quibusdam exercitationem, blanditiis excepturi molestias assumenda doloribus sed!"
            }

        ]
    }
    render() { 
        return ( 
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })
                    }
                </div>
            </section>
        );
    }
}
 
export default Services;