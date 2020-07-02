import React from "react";
import {
  Media,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#000850" }} expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              About
            </DropdownToggle>
            <DropdownMenu right>
              <Link to={`/about`}>
                <DropdownItem>What is VULPIX</DropdownItem>
              </Link>
              <Link to={`/info`}>
                <DropdownItem>VULPIX score</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="cplogo">
            <Media src="/cplogo.png"></Media>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
