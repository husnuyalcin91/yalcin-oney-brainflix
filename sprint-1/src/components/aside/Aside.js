import React from 'react';
import './Aside.scss';

class Aside extends React.Component {

    render() {
        return (
            <ul>
                <li key={this.props.mainVideo.id} sideVideo={this.props.sideVideo} mainVideo={this.props.mainVideo}>
                    {this.props.sideVideo.filter( (item) => {
                        return item.id !== this.props.mainVideo.id})
                    .map( (item) => {
                        return <div key={item.id}>
                            <h4>{item.title}</h4>
                            <h6>{item.channel}</h6>
                            <img src={item.image[0]} alt={item.image[1]} />
                        </div>
                    })
                    }
                </li>
            </ul>
        )
    }
}


export default Aside;