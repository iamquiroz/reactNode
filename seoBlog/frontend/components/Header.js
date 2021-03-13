import React, { useState } from 'react';
import Router  from 'next/router';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
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

		  {!isAuth() && (
		    <React.Fragment>
		       <NavItem>
                         <NavLink href="/signin">Signin</NavLink>
                       </NavItem>
		       <NavItem>
		           <NavLink href='/signup'>Signup</NavLink>
                       </NavItem>
		    </React.Fragment>
		  )}

		  {isAuth() &&(
		      <NavItem>
			 <NavLink 
			    style={{ cursor: 'pointer' }}
			    onClick={ () => signout( () => Router.replace(`/signin`))}
			  > 
			   Signout
			  </NavLink>
		      </NavItem>
		  )}


                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
}

export default Header;
