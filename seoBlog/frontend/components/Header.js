import React, { useState } from 'react';
import { APP_NAME } from '../config';
import {
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
    NavbarText
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
          <div>
            <Navbar color="faced" light expand="md">
              <NavbarBrand className="font-weight-bold" href="/">{ APP_NAME } </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="/signin">Signin</NavLink>
                  </NavItem>
		  <NavItem>
		      <NavLink href='/signup'>Signup</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
}

export default Header;
