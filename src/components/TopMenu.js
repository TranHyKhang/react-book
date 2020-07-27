import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import {CartContext} from '../context/cart'

import {Link} from 'react-router-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{marginRight: "10px"}}>
              <Link to='/books'>Books</Link>
            </NavItem>
            <NavItem style={{marginRight: "10px"}}>
              <Link to='/signin'>SignIn</Link>
            </NavItem>
            <CartContext.Consumer>
              {
                ({cartItem}) => (
                  <NavItem>
                  <Link to='/books'>cart ({cartItem.length})</Link>
                </NavItem>
                )
              }
            </CartContext.Consumer>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;