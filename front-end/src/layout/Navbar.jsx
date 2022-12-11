import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

import logo from "../assets/logo-cyber.png";

export default function CusNavbar() {
  const navName = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Products", link: "#" },
    { name: "Data Security", link: "#" },
    { name: "Resources", link: "#" },
    { name: "Contact", link: "#" },
    { name: "Blog", link: "#" },
  ];
  return (
    <>
      <Navbar className="pl-0 pr-0" expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="300rem"
            height="60rem"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {navName.map((item, key) => (
              <Nav.Link href={item.link} key={key}>
                {console.log(item)}
                <span className="navlink">{item.name}</span>
              </Nav.Link>
            ))}
            <Button className="pt-2 pb-2 pl-4 pr-4 ml-2 btn-nav">LOGIN</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
