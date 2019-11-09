import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
//page imports
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/upload" component={UploadPage} />
            <Route path="/video-details" component={VideoDetailsPage} />
            <Route path="/video-player" component={VideoPlayerPage} />
        </Switch>
    </Router>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();