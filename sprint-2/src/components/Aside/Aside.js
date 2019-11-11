import React from 'react';
//wrap the image in a link to reroute to video details page
import './Aside.scss';

class Aside extends React.Component {

    render() {
        return (
            <ul className='aside'>
                <li className='aside__list-container' key={this.props.sideBarVideos.id} sideBarVideos={this.props.sideBarVideos} mainHeroVideo={this.props.mainHeroVideo} >
                    {this.props.sideBarVideos.filter( (item) => {
                        return item.id !== this.props.mainHeroVideo.id})
                    .map( (item) => {
                        return <div className='aside__wrapper' key={item.id}>
                            <img className="aside__image" src={item.image} alt={''} />
                            <div className='aside__title-channel-holder'>
                                <h4 className="aside__title">{item.title}</h4>
                                <h6 className="aside__channel">{item.channel}</h6>
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