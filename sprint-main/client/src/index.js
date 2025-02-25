import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

//page imports
import UploadPage from './pages/UploadPage/UploadPage';

ReactDOM.render(<Router>
    <Switch>
      <Route path="/videos/:id" component={App} />
      <Route path="/upload" component={UploadPage} />
      <Route path="/" component={App} />
    </Switch>
  </Router>        
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();