import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">
    <div classname="left-column"
    // style={{
    //   background: "url(" + profilePicture + ") no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center"
    // }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>

            <div className="text">555-555-5555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">prestonphillips@example.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Murrey, UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
