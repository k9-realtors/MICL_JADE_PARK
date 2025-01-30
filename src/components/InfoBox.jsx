import React from "react";
import { useGlobalContext } from "./context/globalContext";

const InfoBox = () => {
  const { handleShowModal } = useGlobalContext();

  return (
    <div>
      <div className="info-box overflow-hidden">
        <span className="pro-status">
          EOI Window Open : Limited Period Only
        </span>
        <h1 className="pro-title">L&T Evara Heights</h1>
        <div>
          <h3 className="pro-dev">Next to Viviana Mall Thane West</h3>
        </div>
        <span className="d-block mb-1 text-capitalize of-box offer-bg-animation">
          <span className="offer-text-outer">
            <span className="offer-text"> Avail Special Launch Benefits</span>
          </span>
        </span>
        <span className="d-block mb-1 text-capitalize of-box offer-bg-animation">
          <span className="offer-text-outer" style={{ color: "black" }}>
            <span className="offer-text">
              Preference in Early Choice Of Inventory- Pricing benefit For 1st
              100 EOI Passholders- EOI Benefits Closes Soon
            </span>
            <h4 className="animated bounceIn infinite">
              Pay 20% Now and nothing till march 2026
            </h4>
          </span>
        </span>
        <span className="d-block"></span>
        <span className="pro-tag-line">
          Spacious <b> 2, 3 &amp; 4 BHK</b> Starts At
        </span>{" "}
        <span className="pro-price">
          ₹ 1.70 Cr*<small> All Incl.</small>
        </span>
        <button
          className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale"
          onClick={handleShowModal}
        >
          Express Your Interest
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
