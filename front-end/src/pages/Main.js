import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../styles/Main.css";
import Slider from "react-slick";
import icon1 from "../assets/icon-aws.svg";
import icon2 from "../assets/icon-poc.svg";
import icon3 from "../assets/icon-app-dev.svg";
import icon4 from "../assets/icon-ui-dev.svg";
import icon5 from "../assets/icon-x-96.svg";

import co1 from "../assets/fetch-2.png";
import co2 from "../assets/nocsys-2.png";
import co3 from "../assets/usi_s.svg";
import co4 from "../assets/vip.svg";
import co5 from "../assets/datastore@2x.png";
import co6 from "../assets/logo-copebit.png";

function Main() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: false,
          arrows: false,
          pauseOnDotsHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          arrows: false,
          pauseOnDotsHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          pauseOnDotsHover: true,
        },
      },
    ],
  };

  return (
    <div className="section" style={{ backgroundColor: "#34086c" }}>
      <div className="main-div">
        <Row className="hero-img m-0">
          <Col xs={12} className="hero-text">
            <Row className="hero-heading p-header">
              <Col xs={12}>
                <h1 style={{ marginBottom: "20%" }}>
                  Cyber Security<br></br>
                  Learning Management System
                </h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="cards-panel">
        <Row className="cards m-0">
          <Col lg={12} className="p-0">
            <div className="marginn">
              <Card className="card-first bg-orange card-services p-3">
                <Card.Img
                  variant="top"
                  src={icon1}
                  className="card-services-img"
                />
                <Card.Body>
                  <Card.Title className="mb-4">
                    Amazon Web Services <br></br> Migration
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>
                    A fast, reliable and secure shift to cloud. Our expert AWS
                    migration & DevOps consultation services provide your
                    organization with an accurate and reliable cloud replica of
                    your on-premise environment.
                  </Card.Text>
                  <a href="#explore">
                    <span>Explore the Migration Process</span>
                  </a>
                </Card.Body>
              </Card>
              <Card className="card-services bg-lblue p-3">
                <Card.Img
                  variant="top"
                  src={icon2}
                  className="card-services-img"
                />
                <Card.Body>
                  <Card.Title className="mb-4">
                    Sales Enablement & <br></br>Sandboxing
                  </Card.Title>
                  <Card.Text>
                    A fast, reliable and secure shift to cloud. Our expert AWS
                    migration & DevOps consultation services provide your
                    organization with an accurate and reliable cloud replica of
                    your on-premise environment.
                  </Card.Text>
                  <a href="#explore">
                    <span>Explore the Migration Process</span>
                  </a>
                </Card.Body>
              </Card>
              <Card className="card-services bg-pink p-3">
                <Card.Img
                  variant="top"
                  src={icon4}
                  className="card-services-img"
                />
                <Card.Body>
                  <Card.Title className="mb-4">
                    UI & Application <br></br> Development
                  </Card.Title>
                  <Card.Text>
                    A fast, reliable and secure shift to cloud. Our expert AWS
                    migration & DevOps consultation services provide your
                    organization with an accurate and reliable cloud replica of
                    your on-premise environment.
                  </Card.Text>
                  <a href="#explore">
                    <span>Explore the Migration Process</span>
                  </a>
                </Card.Body>
              </Card>
              <Card className="card-services bg-purple p-3">
                <Card.Img
                  variant="top"
                  src={icon3}
                  className="card-services-img"
                />
                <Card.Body>
                  <Card.Title className="mb-4">
                    Mobile App <br></br>Development
                  </Card.Title>
                  <Card.Text>
                    A fast, reliable and secure shift to cloud. Our expert AWS
                    migration & DevOps consultation services provide your
                    organization with an accurate and reliable cloud replica of
                    your on-premise environment.
                  </Card.Text>
                  <a href="#explore">
                    <span>Explore the Migration Process</span>
                  </a>
                </Card.Body>
              </Card>

              <Card className=" card-last bg-black card-services p-3">
                <Card.Img
                  variant="top"
                  src={icon5}
                  className="card-services-img"
                />
                <Card.Body>
                  <Card.Title className="mb-4">
                    Introducing <br></br> X-96
                  </Card.Title>
                  <Card.Text>
                    A fast, reliable and secure shift to cloud. Our expert AWS
                    migration & DevOps consultation services provide your
                    organization with an accurate and reliable cloud replica of
                    your on-premise environment.
                  </Card.Text>
                  <a href="#explore">
                    <span>Explore the Migration Process</span>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row className="pt-5 m-0">
          <Col className="p-0">
            <h1 style={{ color: "white" }} className="text-center">
              Our Customers
            </h1>
            <div className="company-slider">
              <Slider {...settings}>
                <div>
                  <img
                    src={co1}
                    className="company-icons"
                    alt="company-logo"
                  ></img>
                </div>
                <div>
                  <img
                    src={co2}
                    className="company-icons"
                    alt="company-logo"
                  ></img>
                </div>
                <div>
                  <img
                    src={co6}
                    className="company-icons"
                    alt="company-logo"
                  ></img>
                </div>
                <div>
                  <img
                    src={co5}
                    className="company-icons"
                    alt="company-logo"
                  ></img>
                </div>
                <div>
                  <img
                    src={co3}
                    className="company-icons"
                    alt="company-logo"
                  ></img>
                </div>
                <div>
                  <img
                    src={co4}
                    className="company-icons"
                    alt="company-logo"
                  ></img>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
