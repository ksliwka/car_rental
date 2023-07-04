"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { Col, Row, Image } from "react-bootstrap";
import classes from "./Main.module.css";

const Main = () => {
  const handleScroll = () => {};

  return (
    <Row
      className={`${classes.main} align-items-center justify-content-center`}
    >
      <Col>
        <h1 className="">
          Explore, Choose, Rent: Your Gateway to Automotive Freedom!
        </h1>
        <Row className="mt-4">
          <Col>
            <p className="">
              Discover the freedom of the open road with our car rental website.
              Whether you're traveling for business or pleasure, we offer a
              diverse fleet of vehicles to suit your needs.
            </p>
            <CustomButton
              title="Explore Cars"
              containerStyles="w-100"
              handleClick={handleScroll}
            />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Col>
      <Col>
        <Image src="/car.png" alt="car" fluid className="mt-5 "/>
      </Col>
    </Row>
  );
};

export default Main;
