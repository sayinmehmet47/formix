import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    window.addEventListener('resize', () => {
      const myWidth = window.innerWidth;
      myWidth > 628 ? setOpen(false) : setOpen(true);
      myWidth < 500 ? setOpen(true) : setOpen(false);
    });
  }, []);

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
        <NavLink to="/redux">Redux</NavLink>
        <NavLink to="/firebase">Firebase</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};
