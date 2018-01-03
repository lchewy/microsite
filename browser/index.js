'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './Main';
import Form from './Form';



ReactDOM.render(
    <Router>
        <div>
          {/*<Main />*/}
          <Route exact path="/"  component={Main} />  
          <Route exact path="/signup"  component={Form}/> 
        </div>
    </Router>,
  document.getElementById('app')
);

