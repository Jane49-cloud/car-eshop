import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6 style={{ color: "#fff" }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 style={{ color: "#fff" }}>Contact Info</h6>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-map-marker" style={{ color: "#fff" }}></i>{" "}
                123 Main St, Anytown, USA
              </li>
              <li>
                <i className="fa fa-phone" style={{ color: "#fff" }}></i>{" "}
                555-123-4567
              </li>
              <li>
                <i className="fa fa-envelope" style={{ color: "#fff" }}></i>{" "}
                info@company.com
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 style={{ color: "#fff" }}>Help</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff" }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 style={{ color: "#fff" }}>Location</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2996181789816!2d-81.58779128482013!3d41.53200797925868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d5b5e3d624c10b5!2sCleveland%20Museum%20of%20Art!5e0!3m2!1sen!2sus!4v1620181059767!5m2!1sen!2sus"
              width="100%"
              height="150"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
