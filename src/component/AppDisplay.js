import React,{useState,Component} from 'react';
import SideBar from './SideBar.js';
import AppDetail from './AppDetail.js';
import AppScore from './AppScore.js';

const AppDisplay = (props) => {
 
    
    return(
        <div>
            <SideBar/> 
            <div className="row"><AppDetail select = {props.select}  appList = {props.appList}/> </div>
            <div className="row"><AppScore/></div>
            <div className="row"><AppScore/></div>
        </div>
    
    )
}

export default AppDisplay;