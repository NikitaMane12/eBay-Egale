// src/components/Navbar.tsx

import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Box width="100%">
    <BootstrapNavbar expand="lg" className="bg-body-tertiary" fixed="top" >
      <div className="container-fluid">
        <BootstrapNavbar.Brand
          as={Link}
          to="/Home"
          style={{ marginRight: "20px" }}
        >
          <img
            src="https://convextech.com/wp-content/uploads/2024/06/logo.svg"
            style={{ width: "200px", height: "auto", marginLeft: "10px",marginTop:"-30px" }}
            alt="Logo"
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{
              fontSize: "13px",
              marginLeft: "80px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Nav.Link
              as={Link}
              to="/Home"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/WhyChooseUs"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              WHY CHOOSE US
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/SapSolution"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              SAP SOLUTION
            </Nav.Link>
            <NavDropdown
              title="SERVICE"
              id="basic-nav-dropdown"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              <NavDropdown.Item
                as={Link}
                to="/Service"
                style={{ background: "white", fontWeight: "bold" }}
              >
                Health Care Services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/it-services"
                style={{ background: "white", fontWeight: "bold" }}
              >
                IT Services
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/non-it-engineering-services"
                style={{ background: "white", fontWeight: "bold" }}
              >
                Non-IT And Engineering Services
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/Contact"
              style={{ fontSize: "13px", fontWeight: "bold" }}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <Form className="d-flex" style={{ marginRight: "50px", marginTop:"15px" }}>
          <FormControl
            type="search"
            placeholder="Search here"
            aria-label="Search"
            className="me-2"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              borderRadius: "10px",
            }}
          />
          <Button style={{ fontSize: "13px", fontWeight: "bold" }}>
            Search
          </Button>
        </Form>

        <div style={{ marginLeft: "1px", display: "flex" }}>
          <Button
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              marginRight: "10px",
              height: "35px",
              marginTop: "17px",
            }}
          >
            Login
          </Button>
          <Button
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              height: "35px",
              marginTop: "17px",
            }}
          >
            SignUp
          </Button>
        </div>
      </div>
    </BootstrapNavbar>
    </Box> 
  );
};

export default Navbar;
