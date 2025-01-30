import React from "react";

const StripSection = () => {
  return (
    <div className="strip-section section">
      <div className="container">
        <div className="headd">
          <h2 style={{ fontSize: "25px" }}>Key Features</h2>
        </div>
        <ul className="strip_section-row">
          <li>
            <div className="strip-box">
              <div className="title">3, 4 &amp; 5 BHK Homes </div>
              <div className="sub_title">Configuration</div>
            </div>
          </li>
          <li>
            <div className="strip-box">
              <div className="title">3 Acres </div>
              <div className="sub_title">Land Parcel</div>
            </div>
          </li>
          <li>
            <div className="strip-box">
              <div className="title"> Revealing Soon </div>
              <div className="sub_title">Floors</div>
            </div>
          </li>
          <li>
            <div className="strip-box">
              <div className="title">New Launch</div>
              <div className="sub_title">Project Status</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StripSection;
