import React, { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import Logo from "/src/assets/images/logo.svg";
import NavIcon1 from "/src/assets/images/nav-icon1.svg";
import NavIcon2 from "/src/assets/images/nav-icon2.svg";
import NavIcon3 from "/src/assets/images/nav-icon3.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <BootstrapNavbar.Brand href="#home">
          {/* <img src={Logo} alt="Logo" /> */}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/onyedikachi-okemiri-29b199b3/">
                <img src={NavIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/your-profile">
                <img src={NavIcon2} alt="GitHub Icon" />
              </a>
              <a href="https://twitter.com/your-profile">
                <img src={NavIcon3} alt="Twitter Icon" />
              </a>
            </div>
            <a href="/CV.pdf" download className="vvd">
              <button>
                <span>Download CV</span>
              </button>
            </a>
          </span>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
