"use client";

import Link from "next/link";
import CustomButton from "./CustomButton";
import classes from "./Navbar.module.css";
import {  Navbar } from "react-bootstrap";

import { Container } from "react-bootstrap";

const NavbarCompononet = () => {
  return (
    <Container >
      <Navbar expand="lg" className="mt-3">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Link href="/" className={classes.navbar__title}>
            <h2>Car Rental</h2>
          </Link>
          <Navbar.Collapse className="justify-content-end">
            <CustomButton title="Sign in" btnType="button" containerStyles="" />
          </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarCompononet;
