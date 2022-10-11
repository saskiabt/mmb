import React from "react";
import "../footer/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import openLink from "../../helper-functions/openLink";

function Footer() {
  return (
    <div className="footer">
      <p>Built by Saskia Binder</p>
      <div className="footer-buttons">
        <button
          className="portfolio"
          onClick={() => openLink("https://saskiabt.github.io/portfolio/")}
        >
          Portfolio
        </button>
        <button
          className="linkedin-icon icon"
          onClick={() => {
            openLink("https://www.linkedin.com/in/saskia-binder/");
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
