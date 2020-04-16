import React,{useState,Component} from 'react';
import SideBar from './SideBar.js';
import AppDetail from './AppDetail.js';
import AppScore from './AppScore.js';

function AppDisplay(){

    
    return(
        <div>
            <SideBar/> 
            <div className="row"><AppDetail/> </div>
            <div className="row"><AppScore/></div>
            <div className="row"><AppScore/></div>
        </div>
    
    )
}

export default AppDisplay;