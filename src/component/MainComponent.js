import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AppDetail from './AppDetail.js';

function Main(){

    const detail = () => { return(<AppDetail/>); }
    
    return(
        <div className="App">
            <Switch>
                <Route path='/detail' component={detail}/>
            </Switch>
        </div>
    )
}

export default Main; 