import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="footer">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Resilience Visitation</h5>
          <p>
            67 Village Dr. Belgrade MT, 59714
            <br />
            brice@resiliencevisitation.org
            <br />
            (406) 213-9614
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">More Information:</h5>
          <ul className="list-unstyled">
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/models"
              >
                Models
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Careers:</h5>
          <ul className="list-unstyled">
            <li>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/jobs"
              >
                Apply
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Conntact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
