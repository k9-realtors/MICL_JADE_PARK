/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useGlobalContext } from "./context/globalContext";
import "../index.css";

const Pricing = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded" id="pricing">
      <div class="over1">
        <h1 class="d-block section-heading color-primary text-capitalize">
          MICL Jade Park - Pricing
        </h1>

        <div className="pricing-div">
          <div className="price-card">
            <h3 style={{ fontSize: "1.5rem", marginBlock: "1rem" }}>3 BHK</h3>
            <h4>1062 - 1217 Sq. ft</h4>
            <button
              class="btn btn-sm btn-info effetGradient effectScale enqModal"
              onClick={handleShowModal}
            >
              Price Breakup
            </button>
          </div>
          <div className="price-card">
            <h3 style={{ fontSize: "1.5rem", marginBlock: "1rem" }}>4 BHK</h3>
            <h4>1650 - 2434 Sq. ft</h4>
            <button
              class="btn btn-sm btn-info effetGradient effectScale enqModal"
              onClick={handleShowModal}
            >
              Price Breakup
            </button>
          </div>
          <div className="price-card">
            <h3 style={{ fontSize: "1.5rem", marginBlock: "1rem" }}>5 BHK</h3>
            <h4>2170 - 3976 Sq. ft</h4>
            <button
              class="btn btn-sm btn-info effetGradient effectScale enqModal"
              onClick={handleShowModal}
            >
              Price Breakup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
