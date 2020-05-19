import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
} from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#000850" }} expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              About
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>What is VULPIX</DropdownItem>
              <DropdownItem>VULPIX score</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
