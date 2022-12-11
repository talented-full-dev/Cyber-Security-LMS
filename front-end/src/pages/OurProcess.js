import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import icon1 from "../assets/analyze.png";
import icon2 from "../assets/design.png";
import icon3 from "../assets/develop.png";
import icon4 from "../assets/deploy.png";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/OurProcess.css";

function OurProcess() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      style={{ backgroundColor: "rgba(23, 13, 40, .97)", color: "white" }}
      className="process"
    >
      <Row className="process-row">
        <Col xs={12} className="p-0 text-center">
          <Row className="m-0">
            <Col xs={12}>
              <h1>Our Process</h1>
            </Col>
            <Col xs={12}>
              <p>Meticulous attention to detail along every step of the way!</p>
            </Col>
          </Row>
          <Row className="m-0">
            <Col data-aos="fade-up">
              <ul className="process-box p-0">
                <li>
                  <Row>
                    <Col md={12}>
                      <img src={icon1} alt="analyze"></img>
                    </Col>
                    <Col md={12}>
                      <h4>Analyze</h4>
                    </Col>
                  </Row>
                </li>
                <li className="list-obj">
                  <Row>
                    <Col md={12}>
                      <img src={icon2} alt="design"></img>
                    </Col>
                    <Col md={12}>
                      <h4>Design</h4>
                    </Col>
                  </Row>
                </li>
                <li className="list-obj">
                  <Row>
                    <Col md={12}>
                      <img src={icon3} alt="develop"></img>
                    </Col>
                    <Col md={12}>
                      <h4>Develop</h4>
                    </Col>
                  </Row>
                </li>
                <li className="list-obj">
                  <Row>
                    <Col md={12}>
                      <img src={icon4} alt="deploy"></img>
                    </Col>
                    <Col md={12}>
                      <h4>Deploy</h4>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default OurProcess;
