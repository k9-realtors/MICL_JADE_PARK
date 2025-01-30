import React from "react";
import { useGlobalContext } from "./context/globalContext";

const VirtualTourRequest = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded" id="sitevisit">
      <span className="section-link"></span>
      <h3 className="head text-capitalize">Virtual Tour Request</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShowModal}>
          <div className="at-property-item my-2 pt-md-0">
            <div
              className="at-property-img vsv-img lazyloaded"
              data-expand="-1"
            >
              <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block">
                <img
                  className="img-responsive"
                  src="images/lntevaraheightsweb1.webp"
                  width="100%"
                  height="350"
                  alt="virtual site visit"
                />
              </div>
              <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none">
                <img
                  className="img-responsive"
                  src="images/lntevaraheightsweb1.webp"
                  width="100%"
                  height="206"
                  alt="virtual site visit"
                />
              </div>
              <div className="vsv-text-bk">
                <div className="vsv-text-bg">
                  <div className="vsv-icon lazyloaded"></div>
                  <span className="text-uppercase h1 font-weight-bold mb-0 d-none d-lg-block">
                    Virtual Site Visit
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="text-center d-block d-lg-none content-clr">
            Virtual Site visit
          </span>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6" onClick={handleShowModal}>
          <div className="at-property-item my-2 pt-md-0">
            <div
              className="at-property-img vsv-img lazyloaded"
              data-expand="-1"
            >
              <div className="d-none d-xs-none d-sm-none d-md-block d-lg-block">
                <img
                  className="img-responsive"
                  src="images/lntevaraheightsg4.webp"
                  width="100%"
                  height="350"
                  alt="sample flat"
                />
              </div>
              <div className="d-block d-xs-block d-sm-block d-md-none d-lg-none">
                <img
                  className="img-responsive"
                  src="images/lntevaraheightsg4.webp"
                  width="100%"
                  height="206"
                  alt="sample flat"
                />
              </div>
              <div className="vsv-text-bk">
                <div className="vsv-text-bg">
                  <div className="vsv-icon lazyloaded"></div>
                  <span className="text-uppercase h1 font-weight-bold mb-0 d-none d-lg-block">
                    Sample Flat
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span className="text-center d-block d-lg-none content-clr">
            Sample Flat
          </span>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourRequest;
