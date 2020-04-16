import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AppDisplay from './AppDisplay.js';
import HomeComponent from './HomeComponent.js';
import AboutComponent from './AboutComponent.js';
import ResultComponent from './ResultComponent';

function Main(){

    const home = () => {return(<HomeComponent/>);}
    const detail = () => { return(<AppDisplay/>); }
    const about = () => { return(<AboutComponent/>); }
    const result = () => { return(<ResultComponent/>); }
    
    return(
        <div>
            <Switch>
                <Route path='/detail' component={detail}/>
                <Route path='/home' component={home}/>
                <Route path='/about' component={about}/>
                <Route path='/home' component={result}/>
                
            </Switch>
        </div>
    )
}

export default Main; 