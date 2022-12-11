import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg from "../assets/hero-image.jpg";
import "../styles/aws.css";
import awshome from "../assets/aws-home.png";
import { FiCheck } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import VisibilitySensor from "react-visibility-sensor";

import Aos from "aos";
import "aos/dist/aos.css";

function AwsMigration() {
  const [display, setDisplay] = useState(false);

  function onChange(isVisible) {
    if (isVisible === true) {
      setDisplay(true);
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="awsmig">
      <Parallax bgImage={bg} strength={300}>
        <div className="text-center aws-heading">
          <h1>AWS Migration</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </Parallax>
      <Row className="aws-card-container">
        <Col xs={12}>
          <Row className="aws-card">
            <Col className="bg-orange aws-card-img " md={6} sm={12} xs={12}>
              <img
                src={awshome}
                data-aos="fade-up"
                alt="aws-migration"
                className="imgaws"
              ></img>
            </Col>
            <Col
              md={6}
              sm={12}
              xs={12}
              className="pt-5 pl-lg-5 pr-lg-5 pl-md-3 pr-md-3 aws-card-text"
            >
              <Row className="pb-5">
                <Col>
                  <h4>Why move to cloud?</h4>
                  <p className="pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.<br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Col>
              </Row>

              <span
                className="vc_sep_line"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              ></span>
              <Row className="pt-5 pb-5">
                <Col>
                  <Row>
                    <Col xs={2}>
                      <FiCheck
                        style={{
                          border: "1px solid purple",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                        color="purple"
                        size="42"
                      />
                    </Col>
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2}>
                      <FiCheck
                        style={{
                          border: "1px solid purple",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                        color="purple"
                        size="42"
                      />
                    </Col>
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2}>
                      <FiCheck
                        style={{
                          border: "1px solid purple",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                        color="purple"
                        size="42"
                      />
                    </Col>
                    <Col>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <span
                className="vc_sep_line"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              ></span>

              <Row className="pt-5 pb-5">
                <Col>
                  <p style={{ fontWeight: "bold" }}>
                    Want to have a sneak peek into various customer-based use
                    cases?
                  </p>
                  <Button className="aws-btn-learn"> Learn More</Button>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="m-0 pt-5">
            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-center text-center mt-5"
            >
              <VisibilitySensor onChange={onChange} once>
                <div className="text-center">
                  {display && (
                    <div className="progress-bar-box">
                      <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={78}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {(value) => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbar
                              value={value}
                              text={`${roundedValue}%`}
                              styles={buildStyles({
                                pathTransition: "none",
                                textColor: "white",
                                pathColor: "rgb(255,153,0)",
                                trailColor: "rgba(255,255,255,0)",
                              })}
                            />
                          );
                        }}
                      </AnimatedProgressProvider>
                    </div>
                  )}
                  <h5 className="pt-4 text-white">
                    Reduced cost of operations
                  </h5>
                  <p className="text-white pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </VisibilitySensor>
            </Col>

            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-center text-center mt-5"
            >
              <VisibilitySensor onChange={onChange} once>
                <div style={{}}>
                  {display && (
                    <div className="progress-bar-box">
                      <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {(value) => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbar
                              value={value}
                              text={`${roundedValue}%`}
                              /* This is important to include, because if you're fully managing the
                            animation yourself, you'll want to disable the CSS animation. */
                              styles={buildStyles({
                                pathTransition: "none",
                                textColor: "white",
                                pathColor: "rgb(255,153,0)",
                                trailColor: "rgba(255,255,255,0)",
                              })}
                            />
                          );
                        }}
                      </AnimatedProgressProvider>
                    </div>
                  )}
                  <h5 className="pt-4 text-white">
                    Reduced cost of operations
                  </h5>
                  <p className="text-white pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </VisibilitySensor>
            </Col>

            <Col
              sm={12}
              md={4}
              className="d-flex justify-content-center text-center mt-5"
            >
              <VisibilitySensor onChange={onChange} once>
                <div style={{}}>
                  {display && (
                    <div className="progress-bar-box">
                      <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={91}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                      >
                        {(value) => {
                          const roundedValue = Math.round(value);
                          return (
                            <CircularProgressbar
                              value={value}
                              text={`${roundedValue}%`}
                              /* This is important to include, because if you're fully managing the
                            animation yourself, you'll want to disable the CSS animation. */
                              styles={buildStyles({
                                pathTransition: "none",
                                textColor: "white",
                                pathColor: "rgb(255,153,0)",
                                trailColor: "rgba(255,255,255,0)",
                              })}
                            />
                          );
                        }}
                      </AnimatedProgressProvider>
                    </div>
                  )}
                  <h5 className="pt-4 text-white">
                    Reduced cost of operations
                  </h5>
                  <p className="text-white pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </VisibilitySensor>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AwsMigration;
