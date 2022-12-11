import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Parallax } from "react-parallax";
import bg from "../assets/hero-image.jpg";
import "../styles/sales.css";
import img1 from "../assets/aid-in-marketing-home.png";
import img2 from "../assets/customer-specific-solutions-home.png";
import img3 from "../assets/reduce-sales-cycle-home.png";

import { IoSpeedometerOutline } from "react-icons/io5";
import { BiCloudLightRain } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";

function SalesEnablement() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="awsmig">
      <Parallax bgImage={bg} strength={400}>
        <div className="text-center sales-heading">
          <h1>Sales Enablement & Sandboxing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </Parallax>
      <Row className="sales-card-container">
        <Col xs={12}>
          <Row className="sales-card">
            <Col className="p-0">
              <Row className="bloc-tabs m-0">
                <Col className="p-0" md={12} lg={4}>
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    Expedite Marketing
                  </button>
                </Col>

                <Col className="p-0" md={12} lg={4}>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    Reduce Sales Cycle Duration
                  </button>
                </Col>

                <Col className="p-0" md={12} lg={4}>
                  <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    Reduce Sales Cycle Duration
                  </button>
                </Col>
              </Row>

              <Row className="content-tabs m-0">
                <Col>
                  <Row
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <Col
                      md={12}
                      lg={8}
                      className={toggleState === 1 ? "noanimate" : ""}
                    >
                      <div className="p-md-5 p-sm-2">
                        <h2>
                          Allowing organizations to help clients envision their
                          end products
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>

                        <Button className="sales-btn-learn"> Learn More</Button>
                      </div>
                    </Col>
                    <Col className={toggleState === 1 ? "animate" : ""}>
                      <img src={img1} alt="img for sales"></img>
                    </Col>
                  </Row>

                  <Row
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <Col className={toggleState === 2 ? "noanimate" : ""}>
                      <img src={img3} alt="img for sales"></img>
                    </Col>
                    <Col
                      md={12}
                      lg={8}
                      className={toggleState === 2 ? "animate" : ""}
                    >
                      <div className="p-md-5 p-sm-2">
                        <h2>
                          Allowing organizations to help clients envision their
                          end products
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <Button className="sales-btn-learn"> Learn More</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                    <Col
                      md={12}
                      lg={8}
                      className={toggleState === 3 ? "noanimate" : ""}
                    >
                      <div className="p-md-5 p-sm-2">
                        <h2>
                          Allowing organizations to help clients envision their
                          end products
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <Button className="sales-btn-learn"> Learn More</Button>
                      </div>
                    </Col>
                    <Col className={toggleState === 3 ? "animate" : ""}>
                      <img src={img2} alt="img for sales"></img>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Row
          style={{ paddingTop: "7%", color: "white" }}
          className="justify-content-center"
        >
          <Col md={12} lg={4}>
            <Row>
              <Col className="text-center" xs={2}>
                <IoSpeedometerOutline color="#1e5bf7" size="42" />
              </Col>
              <Col xs={10}>
                <h6>Improve sales team performance</h6>
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
                <BiCloudLightRain color="#1e5bf7" size="42" />
              </Col>
              <Col xs={10}>
                <h6>Dynamic provisioning of demos</h6>
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
                <RiUserFollowLine color="#1e5bf7" size="42" />
              </Col>
              <Col xs={10}>
                <h6>Personalized experiences</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default SalesEnablement;
