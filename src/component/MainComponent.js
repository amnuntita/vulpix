import React, {useState,useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AppDisplay from './AppDisplay.js';
import HomeComponent from './HomeComponent.js';
import AboutComponent from './AboutComponent.js';
import ResultComponent from './ResultComponent.js';
import {baseUrl} from '../shared/BaseUrl.js';
import Test from './test.js'

const Main= () => {

    const [appList,setAppList] = useState({});
    const [selectedId,setSelected] = useState(false);
    useEffect(() => {
        async function fetchData() {
          const res = await fetch(baseUrl+"app_list");
          res
            .json()
            .then(res => setAppList(res))
        }
    
        fetchData();
      });
    
    
    //const app = () => {[appList].filter((app) => app.size === 39845888)[0]}
    
    const home = () => {return(<HomeComponent/>);}
    const detail = ({match}) => { if(appList){
        console.log(parseInt(match.params.appId,10));
        setSelected(parseInt(match.params.appId,10));
    }
        return(<AppDisplay select = {selectedId} appList = {appList} />); }
    const about = () => { return(<AboutComponent/>); }
    const result = () => { return(<ResultComponent/>); }
    const test = () => { return(<Test/>); }

    //console.log(appList[selectedId]);

    return(
        <div>
            <Switch>
                <Route path='/home' component={home}/>
                <Route path='/about' component={about}/>
                <Route path='/detail/:appId' component={detail}/>
                <Route path='/test' component={test}/>
                
            </Switch>
        </div>
    )
}

export default Main; 