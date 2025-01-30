import React from "react";
import { useGlobalContext } from "./context/globalContext";

const FloorPlan = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded" id="floorplan">
      <span className="section-link"></span>{" "}
      <h2 className="head text-capitalize">MICL Jade Park - Floor Plan</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col-md-4">
          <div
            className="at-property-item shadow-sm border border-grey mt-1"
            onClick={handleShowModal}
          >
            <div className="at-property-img">
              <img
                data-sizes="auto"
                loading="lazy"
                className="floor-plan-img blur lazyautosizes ls-is-cached lazyloaded ls-inview"
                src="images/lntevaraheightsmasterplan.webp"
                sizes="452px"
                alt="master plan"
              />

              <div className="at-property-overlayer"></div>
              <span className="btn btn-default at-property-btn" role="button">
                Enquire Now
              </span>
            </div>
            <div className="at-property-dis effetGradient">
              <h5>View Master Plan</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="at-property-item shadow-sm border border-grey mt-1"
            onClick={handleShowModal}
          >
            <div className="at-property-img">
              <img
                data-sizes="auto"
                loading="lazy"
                className="floor-plan-img blur lazyautosizes ls-is-cached lazyloaded ls-inview"
                src="images/lntevaraheightsf1.webp"
                sizes="452px"
                alt="floor plan"
              />

              <div className="at-property-overlayer"></div>
              <span className="btn btn-default at-property-btn" role="button">
                Enquire Now
              </span>
            </div>
            <div className="at-property-dis effetGradient">
              <h5>View Floor Plans</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="at-property-item shadow-sm border border-grey mt-1"
            onClick={handleShowModal}
          >
            <div className="at-property-img">
              <img
                data-sizes="auto"
                loading="lazy"
                className="floor-plan-img blur lazyautosizes ls-is-cached lazyloaded ls-inview"
                src="images/lntevaraheightsf2.webp"
                sizes="452px"
                alt="floor plan"
              />

              <div className="at-property-overlayer"></div>
              <span className="btn btn-default at-property-btn" role="button">
                Enquire Now
              </span>
            </div>
            <div className="at-property-dis effetGradient">
              <h5>View Unit Plans</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
