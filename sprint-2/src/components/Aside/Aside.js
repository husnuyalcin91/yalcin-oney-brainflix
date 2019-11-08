import React from 'react';
import './Aside.scss';

class Aside extends React.Component {

    render() {
        return (
            <ul>
                <li className='aside__list-container' key={this.props.sideBarVideos.id} sideBarVideos={this.props.sideBarVideos} mainHeroVideo={this.props.mainHeroVideo} >
                    {this.props.sideBarVideos.filter( (item) => {
                        return item.id !== this.props.mainHeroVideo.id})
                    .map( (item) => {
                        return <div className='aside__wrapper' key={item.id}>
                            <img className="aside__image" src={item.image} alt={''} />
                            <div className='aside__title-channel-holder'>
                                <h4>{item.title}</h4>
                                <h6>{item.channel}</h6>
                            </div>
                        </div>
                    })
                    }
                </li>
            </ul>
        )
    }
}


export default Aside;