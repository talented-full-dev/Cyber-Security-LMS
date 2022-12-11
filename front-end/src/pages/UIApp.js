import React, { useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg from "../assets/hero-image.jpg";
import "../styles/UIApp.css";

import img1 from "../assets/icon-ux-first.svg";
import img2 from "../assets/icon-user-centric.svg";
import img3 from "../assets/icon-app-de.svg";
import img4 from "../assets/ui-home.png";

import Aos from "aos";
import "aos/dist/aos.css";

function UIApp() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);

  return (
    <div className="awsmig">
      <Parallax bgImage={bg} strength={400}>
        <div className="text-center uiapp-heading">
          <h1>UI & Application Development</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </Parallax>
      <Row className="uiapp-card-container">
        <Col xs={12}>
          <Row className="uiapp-card">
            <Col md={12} lg={4}>
              <Card className="p-5" style={{ backgroundColor: "#34086b" }}>
                <Card.Img
                  variant="top"
                  src={img1}
                  style={{ width: "100%", height: "170px" }}
                />
                <Card.Body>
                  <Card.Title>UX First Design</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12} lg={4}>
              <Card
                className="p-5  card-margin-top mt-md-5 mt-lg-0"
                style={{ backgroundColor: "#34086b" }}
              >
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ width: "100%", height: "170px" }}
                />
                <Card.Body>
                  <Card.Title>User Centered UIs</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12} lg={4}>
              <Card
                className="p-5 card-margin-top mt-md-5 mt-lg-0"
                style={{ backgroundColor: "#34086b" }}
              >
                <Card.Img
                  variant="top"
                  src={img3}
                  style={{ width: "100%", height: "170px" }}
                />
                <Card.Body>
                  <Card.Title>Application Development</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Row
          style={{ paddingTop: "7%", color: "white" }}
          className="justify-content-center"
        >
          <Col sm={12} md={6}>
            <div style={{ height: "auto", maxWidth: "100%" }}>
              <img
                data-aos="fade-up"
                src={img4}
                alt="img for ui and app"
                style={{ maxWidth: "100%", height: "auto" }}
              ></img>
            </div>
          </Col>

          <Col sm={12} md={6}>
            <h4>Good design is important for efficient applications</h4>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non p sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="aws-btn-learn mt-4"> Learn More</Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default UIApp;
