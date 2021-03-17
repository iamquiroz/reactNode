import React, { useState } from 'react';
import Router  from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
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

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

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

		  {isAuth() && isAuth().role === 0 && (
		    <NavItem>
			<Link href="/user">
			  <NavLink> {`${isAuth().name}'s Dashboard`}</NavLink>
			</Link>
		    </NavItem>
		  )}

		  {isAuth() && isAuth().role ===1 && (
		    <NavItem>
			<Link href="/admin">
			  <NavLink> {`${isAuth().name}'s Dashboard`}</NavLink>
			</Link>
		    </NavItem>

		  )}

		  {isAuth() && (
		      <NavItem>
			<NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
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
