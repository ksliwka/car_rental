"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Footer.module.css";

import { footerLinks } from "@/constans/constans";

const Footer = () => {
  return (
    <Container className={classes.footer}>
      <Row>
        <Col>
          <h3>Car Rental</h3>
          <p>CarRental 2023</p>
          <p>All Rights Reserved &copy;</p>
        </Col>
        <Col>
          <div>
            <h4>About</h4>
            {footerLinks[0].links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={classes.footer__link}
              >
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </Col>
        <Col>
          <div>
            <h4>Company</h4>
            {footerLinks[1].links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={classes.footer__link}
              >
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
          <div>
            <h4>Socials</h4>
            {footerLinks[2].links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={classes.footer__link}
              >
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
