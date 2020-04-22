import React, { useState } from "react";
import {
  Media,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const HomeComponent = () => {
  return (
    <div>
      <nav>
        <Navbar color="light" light expand="md">
          <NavbarBrand>VULPIX</NavbarBrand>
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
        <div>
          <Media className="logo">
            <Media src={baseUrl + "images/logo_transparent.png"} alt="logo" />
          </Media>
        </div>
      </nav>
    </div>
  );
};

export default HomeComponent;
