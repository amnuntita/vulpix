import React from 'react'
import {Label,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const SideBar = () => {

  return(
    <div className="sidebar">
        <nav>
                <Label> search box </Label>
                <NavItem>
                  <NavLink className="nav-link"  to='/home'>Home</NavLink>
                  <NavLink className="nav-link"  to='/about'>About</NavLink>
                </NavItem>
        
        </nav>
            
    </div>
)
}

export default SideBar;