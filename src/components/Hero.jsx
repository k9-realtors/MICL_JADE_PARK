import React from "react";
// import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import { useGlobalContext } from "./context/globalContext";

const Hero = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  const { handleShowModal } = useGlobalContext();
  return (
    <div id="home" className="section">
      <div className="desktopview">
        <img
          onClick={handleShowModal}
          height="100%"
          width="100%"
          className="d-block micro-main-slider-img ls-is-cached lazyloaded"
          src="images/web-banner-5.jpg"
          alt="banner"
        />

        {/* <Carousel
          slide="true"
          interval="2000"
          activeIndex={index}
          onSelect={handleSelect}
          nextLabel=""
          prevLabel=""
          nextIcon=">>"
          prevIcon="<<"
          touch="true"
          pause="false"
        >
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/web-banner-3.webp"
              alt="banner"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/web-banner-1.webp"
              alt="banner"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/web-banner-4.webp"
              alt="banner"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/web-banner-2.webp"
              alt="banner"
            />
          </Carousel.Item>
        </Carousel> */}
      </div>
      <div className="mobileview">
        <img
          onClick={handleShowModal}
          height="100%"
          width="100%"
          className="d-block micro-main-slider-img ls-is-cached lazyloaded"
          src="images/mob-banner-4.jpg"
          alt="micl jade park banner"
        />

        {/* <Carousel
          slide="true"
          interval="2000"
          activeIndex={index}
          onSelect={handleSelect}
          nextLabel=""
          prevLabel=""
          nextIcon=">>"
          prevIcon="<<"
          touch="true"
        >
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/mob-banner-1.webp"
              alt="banner"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/mob-banner-2.webp"
              alt="banner"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={handleShowModal}
              height="100%"
              width="100%"
              className="d-block micro-main-slider-img ls-is-cached lazyloaded"
              src="images/mob-banner-3.webp"
              alt="banner"
            />
          </Carousel.Item>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Hero;
