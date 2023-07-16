import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Row, Col } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Row>
        <nav className="navbar">
          <Col>
            <div className="navbar-container">
              <Link
                to="/"
                className="navbar-logo"
                style={{
                  marginLeft: "30px",
                  color: "white",
                  textDecoration: "none",
                }}
                onClick={closeMobileMenu}
              >
                <li className="nav-item">Resilience Visitation</li>
              </Link>

              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {/* Home */}

                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                {/* About */}

                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>

                {/* Models */}
                <li className="nav-item">
                  <Link
                    to="/models"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Models
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/newClients"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Private Pay
                  </Link>
                </li>

  {/* New Clients */}
  {/* <li className="nav-item">
                  <Link
                    to="/jobs"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                   New Clients
                  </Link>
                </li> */}

                {/* Jobs */}
                <li className="nav-item">
                  <Link
                    to="/jobs"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Looking For A Job?
                  </Link>
                </li>

               
               
              </ul>
            </div>
          </Col>

          <Col></Col>
        </nav>
      </Row>
    </>
  );
}

export default Navbar;

//Checked
