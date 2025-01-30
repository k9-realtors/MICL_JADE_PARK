import React from "react";
import { useGlobalContext } from "./context/globalContext";

const VirtualTour = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded">
      <div className="container">
        <div className="col-lg-12 col-xs-12">
          <div className="cta-video-section p-2 bg-theme">
            <div className="container">
              <div className="cta-content">
                <div className="row">
                  <div className="col-md-4 col-xs-12 m-auto">
                    <img
                      src="images/lntevaraheights360view1.webp"
                      alt="cta image"
                    />
                  </div>
                  <div className="col-md-8 col-xs-12">
                    <h5 className="font-lg text-center text-weight ">
                      <b>360° Virtual Tour</b>
                    </h5>
                    <h3 className="mt-2 text-center">
                      {/* TAKE A 360 DEGREE TOUR OF THE PROJECT{" "} */}
                      Book a virtual tour with our expert and <br /> explore
                      your future home effortlessly
                    </h3>

                    <div className="cta-btn" style={{ textAlign: "center" }}>
                      <button
                        type="submit"
                        class="btn btn-info micro-form-btn effetMoveGradient submitBtn"
                        onClick={handleShowModal}
                      >
                        Request Here
                        <span className="btn-triangle-w">
                          <span className="icon-icons8-right-arrow-50-_1"></span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
