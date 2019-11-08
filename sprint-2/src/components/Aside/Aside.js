import React from 'react';
import './Aside.scss';

class Aside extends React.Component {

    render() {
        return (
            <ul>
                <li key={this.props.sideBarVideos.id} sideBarVideos={this.props.sideBarVideos} mainHeroVideo={this.props.mainHeroVideo} >
                    {this.props.sideBarVideos.filter( (item) => {
                        return item.id !== this.props.mainHeroVideo.id})
                    .map( (item) => {
                        return <div key={item.id}>
                            <h4>{item.title}</h4>
                            <h6>{item.channel}</h6>
                            <img src={item.image} alt={''} />
                        </div>
                    })
                    }
                </li>
            </ul>
        )
    }
}


export default Aside;