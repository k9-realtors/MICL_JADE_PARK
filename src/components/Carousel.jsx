import React from "react";
import { useGlobalContext } from "./context/globalContext";

const Carousel = () => {
  const { handleShowModal } = useGlobalContext();
  return (
    <section className="section shadow-sm lazyloaded" id="carousel">
      <span className="section-link"></span>{" "}
      <div className="row">
        <div className="col-md-8">
          <h2 className="head text-capitalize">MICL Jade Park - Gallery</h2>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-info micro-form-btn enqModal effetMoveGradient effectScale float-lg-right mx-sm-auto  d-none d-lg-block"
            onClick={handleShowModal}
          >
            Download Gallery
          </button>
        </div>
      </div>
      <div className="owl-carousel-img owl-carousel owl-theme gallery-img">
        {/* <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Badminton.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Badminton.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Badminton.webp"
            alt="logo"
          />
        </a>
        <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Banquet.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Banquet.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Banquet.webp"
            alt="logo"
          />
        </a>
        <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Bedroom.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Bedroom.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Bedroom.webp"
            alt="logo"
          />
        </a>
        <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Co-Working-Pods.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Co-Working-Pods.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Co-Working-Pods.webp"
            alt="logo"
          />
        </a>
        <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Creche.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Creche.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Creche.webp"
            alt="logo"
          />
        </a> */}
        <a data-fancybox="gallery-0" href="images/g4.webp">
          {" "}
          <img
            data-src="../images/g4.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/g4.webp"
            alt="logo"
          />
        </a>
        <a data-fancybox="gallery-0" href="images/g2.webp">
          {" "}
          <img
            data-src="../images/g2.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/g2.webp"
            alt="logo"
          />
        </a>
        <a data-fancybox="gallery-0" href="images/g5.webp">
          {" "}
          <img
            data-src="../images/g5.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/g5.webp"
            alt="logo"
          />
        </a>
        <a data-fancybox="gallery-0" href="images/g8.webp">
          {" "}
          <img
            data-src="../images/g8.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/g8.webp"
            alt="logo"
          />
        </a>
        {/* <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Study-Arena.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Study-Arena.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Study-Arena.webp"
            alt="logo"
          />
        </a>
        <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Swimming-pool-view.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Swimming-pool-view.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Swimming-pool-view.webp"
            alt="logo"
          />
        </a>
        <a
          data-fancybox="gallery-0"
          href="images/lntevaraheights-Gallery-Yoga.webp"
        >
          {" "}
          <img
            data-src="../images/lntevaraheights-Gallery-Yoga.webp"
            loading="lazy"
            className="gallery-thumb ls-is-cached lazyloaded"
            src="images/lntevaraheights-Gallery-Yoga.webp"
            alt="logo"
          />
        </a> */}
      </div>
      <div className="col-12">
        <button
          className="chat-btn btn btn-info micro-form-btn enqModal effetMoveGradient effectScale float-lg-right mx-sm-auto d-lg-none"
          data-form="lg"
          data-title="Download Gallery"
          data-btn="Send Now"
          data-enquiry="Download Gallery"
          data-redirect="floorplan"
          data-toggle="modal"
          data-target="#enqModal"
          onClick={handleShowModal}
        >
          Download Gallery
        </button>
      </div>
    </section>
  );
};

export default Carousel;
