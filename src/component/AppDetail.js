import React,{useState,Component} from 'react';
import {NavLink,Label} from 'reactstrap';

function AppDetail(){

    
    return(
        <div className="sidebar">
            <nav>
                    <Label> search box </Label>
                    <NavLink href="#">Link1</NavLink>
                    <NavLink href="#">Link2</NavLink>
            </nav>
                
        </div>
    )
}

export default AppDetail;