import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
  NavBtn,
  NavBtnLink,
} from './navbar.style';
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav open={open}>
      <Bars onClick={() => setOpen(!open)} />
      <NavMenu open={open}>
        <NavLink to="/form">Form</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sorting">Sorting</NavLink>
        <NavLink to="/exporting">Export</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
