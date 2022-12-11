import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg from "../assets/hero-image.jpg";
import "../styles/mbapp.css";
import img1 from "../assets/assets-mobile-ap.png";

import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { HiOutlineLightBulb, HiCursorClick } from "react-icons/hi";
import { VscChecklist } from "react-icons/vsc";

import ProgressBar from "../components/ProgressBar";
import AnimatedNumber from "../components/AnimatedNumber";

import Aos from "aos";
import "aos/dist/aos.css";

function MbAppDev() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);

  return (
    <div>
      <Parallax bgImage={bg} strength={400}>
        <div className="text-center mbapp-heading">
          <h1>Mobile Application Development</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </Parallax>
      <Row className="mbapp-card-container">
        <Col xs={12}>
          <Row className="mbapp-card">
            <Col sm={12} md={6}>
              <div
                style={{ height: "auto", maxWidth: "100%" }}
                data-aos="fade-up"
              >
                <img
                  src={img1}
                  alt="img for mobile app dev"
                  style={{ height: "auto", maxWidth: "100%" }}
                ></img>
              </div>
            </Col>

            <Col sm={12} md={6} style={{ overflow: "hidden" }}>
              <div>
                <div className={toggle ? "mb-animater" : "mb-animate display"}>
                  <h4>Best Performing Native Apps</h4>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    p sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Button className="aws-btn-learn mt-4"> Learn More</Button>
                </div>

                <div className={toggle ? "mb-animate display" : "mb-animater"}>
                  <h4>Cost Effective Cross-Platform Apps</h4>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    p sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <Button className="aws-btn-learn mt-4"> Learn More</Button>
                </div>
              </div>

              <div className="d-flex flex-row mt-4">
                <Button
                  size="sm"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  style={{
                    backgroundColor: "rgba(255,255,255,0)",
                    border: "1px solid white",
                  }}
                >
                  {" "}
                  <FaLessThan size="15" />{" "}
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="ml-2"
                  style={{
                    backgroundColor: "rgba(255,255,255,0)",
                    border: "1px solid white",
                  }}
                >
                  {" "}
                  <FaGreaterThan size="15" />{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row
            style={{ paddingTop: "7%", color: "white" }}
            className="justify-content-center"
          >
            <Col sm={12} md={4} lg={4}>
              <ProgressBar done={91} />
            </Col>

            <Col sm={12} md={4} lg={4}>
              <ProgressBar done={70} />
            </Col>

            <Col sm={12} md={4} lg={4}>
              <ProgressBar done={86} />
            </Col>
          </Row>

          <Row
            style={{ paddingTop: "7%", color: "white" }}
            className="justify-content-center"
          >
            <Col md={12} lg={4}>
              <Row>
                <Col className="text-center" xs={2}>
                  <HiOutlineLightBulb color=" rgb(25, 211, 153) " size="42" />
                </Col>
                <Col xs={10}>
                  <h6>Interactive engagement</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={4}>
              <Row>
                <Col className="text-center" xs={2}>
                  <HiCursorClick color=" rgb(25, 211, 153) " size="42" />
                </Col>
                <Col xs={10}>
                  <h6>Ease of usage</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={4}>
              <Row>
                <Col className="text-center" xs={2}>
                  <VscChecklist color=" rgb(25, 211, 153) " size="42" />
                </Col>
                <Col xs={10}>
                  <h6>Instant updates</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: "#34086c",
          margin: "0px",
          paddingRight: "15%",
          paddingLeft: "15%",
          paddingTop: "5%",
          paddingBlock: "5%",
        }}
      >
        <Col xs={12}>
          <Row>
            <Col className="text-center">
              <Row
                style={{ color: "#8639ff", fontSize: "50px" }}
                className="justify-content-center"
              >
                <Col className="d-flex flex-row justify-content-center align-content-center">
                  {" "}
                  <AnimatedNumber done={20} /> +{" "}
                </Col>
              </Row>
              <p style={{ color: "white" }}>Global Partners & Clients</p>
            </Col>
            <Col className="text-center">
              <Row
                style={{ color: "#8639ff", fontSize: "50px" }}
                className="justify-content-center"
              >
                <Col className="d-flex flex-row justify-content-center align-content-center">
                  {" "}
                  <AnimatedNumber done={8} /> +{" "}
                </Col>
              </Row>
              <p style={{ color: "white" }}>Years of Experience</p>
            </Col>
            <Col className="text-center">
              <Row
                style={{ color: "#8639ff", fontSize: "50px" }}
                className="justify-content-center"
              >
                <Col className="d-flex flex-row justify-content-center align-content-center">
                  {" "}
                  <AnimatedNumber done={25} /> +{" "}
                </Col>
              </Row>
              <p style={{ color: "white" }}>Projects Delievered</p>
            </Col>
            <Col className="text-center">
              <Row
                style={{ color: "#8639ff", fontSize: "50px" }}
                className="justify-content-center"
              >
                <Col className="d-flex flex-row justify-content-center align-content-center">
                  {" "}
                  <AnimatedNumber done={100} /> +{" "}
                </Col>
              </Row>
              <p style={{ color: "white" }}>Applications Deployed</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MbAppDev;
