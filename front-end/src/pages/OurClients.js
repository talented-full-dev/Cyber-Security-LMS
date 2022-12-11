import React, { useState } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg from "../assets/hero-image.jpg";

import co3 from "../assets/usi_s.svg";
import co4 from "../assets/vip.svg";
import co7 from "../assets/an10.svg";
import icon from "../assets/icon-contact.svg";
import CardClient from "../components/CardClient";
import {
  GrFacebookOption,
  GrTwitter,
  GrYoutube,
  GrLinkedinOption,
  GrInstagram,
} from "react-icons/gr";

import "./OurClients.css";

function OurClients() {
  const [obj1, setObj1] = useState(false);
  const [obj4, setObj4] = useState(true);

  const changeState = () => {
    setObj1(!obj1);
    setObj4(!obj4);
  };

  window.setTimeout(changeState, 3000);

  return (
    <div
      className="ourclients-container"
      style={{ backgroundColor: "#0b0616" }}
    >
      <Parallax bgImage={bg} strength={300}>
        <Row style={{ color: "white" }}>
          <Col>
            <Row style={{ paddingBottom: "5%", paddingTop: "5%" }}>
              <Col className="text-center">
                <h1>Our Clients</h1>
                <Button className="sales-btn-learn mt-3">Testimonials</Button>
              </Col>
            </Row>
            <Row style={{ paddingBottom: "8%" }}>
              <Col className="our-client-margin">
                <Row>
                  <Col
                    lg={4}
                    md={12}
                    className="card-margin-top mt-md-5 mt-lg-0"
                  >
                    <CardClient Img={co7} />
                  </Col>
                  <Col
                    lg={4}
                    md={12}
                    className="card-margin-top mt-md-5 mt-lg-0"
                  >
                    <CardClient Img={co3} />
                  </Col>
                  <Col
                    lg={4}
                    md={12}
                    className="card-margin-top mt-md-5 mt-lg-0"
                  >
                    <CardClient Img={co4} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Parallax>

      <Row style={{ marginTop: "-5%", marginLeft: "0px", marginRight: "0px" }}>
        <Col className="p-0">
          <Row className="our-client-margin">
            <Col className="bg-purple contact-col" lg={6} md={12} xs={12}>
              <Row>
                <Col>
                  <img
                    src={icon}
                    style={{ width: "20%", height: "auto" }}
                    alt="img for contact icon"
                  ></img>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
                  <h3>
                    Don't know where to start? <br></br>Let's get in touch!
                  </h3>
                  <p>Or email us at: sales@xcom.co</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} xs={12} className="form-col">
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Your Name is" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your Email is" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="What would you like to say"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="bg-purple"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: "5%", marginLeft: "0px", marginRight: "0px" }}>
        <Col className="p-0">
          <Row className="our-client-margin">
            <Col
              lg={3}
              md={12}
              xs={12}
              style={{ padding: "5%", color: "white" }}
            >
              <div>
                <h6>Xcom</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </Col>
            <Col
              lg={3}
              md={12}
              xs={12}
              style={{ padding: "5%", color: "#8639ff" }}
            >
              <h6>Services</h6>

              <ul className="m-0 p-0">
                <li>Home</li>
                <li>Aws Migration</li>
                <li>Sales Enablement</li>
                <li>UI & Applications</li>
                <li>App Development</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Career</li>
              </ul>
            </Col>
            <Col
              lg={3}
              md={12}
              xs={12}
              style={{ padding: "5%", color: "white" }}
            >
              <div>
                <h6>Join Our Team</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </Col>
            <Col
              lg={3}
              md={12}
              xs={12}
              style={{ padding: "5%", color: "white" }}
            >
              <div>
                <h6>Get in touch</h6>
                <GrFacebookOption color="#DDDDDD" />
                <GrTwitter color="#DDDDDD" className="ml-3"></GrTwitter>
                <GrYoutube color="#DDDDDD" className="ml-3"></GrYoutube>
                <GrLinkedinOption
                  color="#DDDDDD"
                  className="ml-3"
                ></GrLinkedinOption>
                <GrInstagram color="#DDDDDD" className="ml-3"></GrInstagram>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: "2%",
          marginLeft: "0px",
          marginRight: "0px",
          borderTop: "1px solid purple",
        }}
      >
        <Col className="p-0">
          <Row className="our-client-margin">
            <Col style={{ padding: "2%", color: "white" }}>
              <div className="text-center">
                <p>Xcom &#169; 2021.All rights reserved</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default OurClients;
