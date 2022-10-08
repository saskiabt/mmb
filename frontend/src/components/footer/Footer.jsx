import React from "react";
import "../footer/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p>Built by Saskia Binder</p>
      <div className="footer-buttons">
        <button className="portfolio">Portfolio</button>
        <button className="linkedin-icon icon">
          {" "}
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
