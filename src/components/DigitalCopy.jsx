import React from "react";
import { useGlobalContext } from "./context/globalContext";

const DigitalCopy = () => {
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
                    <img src="images/lntevaraheights31.webp" alt="cta image" />
                  </div>
                  <div className="col-md-8 col-xs-12">
                    <h3 className="mt-2 font-xl text-center text-weight">
                      Receive A Digital Copy Of Our Brochure
                    </h3>

                    <h5 className="font-lg text-center text-weight ">
                      And Learn More About Our Spacious Residences
                    </h5>
                    <div className="cta-btn" style={{ textAlign: "center" }}>
                      <button
                        onClick={handleShowModal}
                        type="submit"
                        class="btn btn-info micro-form-btn effetMoveGradient submitBtn"
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

export default DigitalCopy;
