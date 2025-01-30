import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context/globalContext";
import "../App.css";

const Details = () => {
  const { handleShowModal } = useGlobalContext();
  const [isMob, setIsMob] = useState(window.innerWidth < 768);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMob(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="section shadow-sm lazyloaded" id="overview">
      <h2 className="d-block section-heading color-primary text-capitalize">
        About MICL Jade Park
      </h2>

      <p>
        Are you ready to find your home where life thrives? Your hunt ends at
        MICL Jade Park Vile Parle West. Nestled in the heart of Mumbai, this
        spectacular residential project is powered by the reputable MICL Group.
        This luxury project will launch soon and offer an enchanting living
        experience where luxury and convenience converge. Offering luxurious 3
        and 4 BHK apartments and Jodi options, the living spaces at MICL Jade
        Park Vile Parle West are vastu compliant, giving a positive aura and
        facilitating harmony and balance. <br />
      </p>
      <p>
        In terms of the interiors, MICL Jade Park Vile Parle West cleverly
        utilizes space and is adequately lit and well-ventilated. This property
        is a delight for nature lovers, providing a splendid 180-degree
        unobstructed view.
      </p>

      {(!isMob || showMore) && (
        <>
          <p>
            Thanks to Mivan Construction technology, residents at MICL Jade Park
            Vile Parle West can enjoy more than 35 contemporary amenities and
            facilities, such as a celebration zone, turf cricket, jogging track,
            kids' play area, etc. Therefore, this is not just a luxury
            property—MICL Jade Park Vile Parle West is a space that inspires
            life.
          </p>
          <p>
            MICL Jade Park offers residents the opportunity to live a lavish
            lifestyle in the lap of nature. Discover a new way of life away from
            the hustle and bustle of city life at MICL Jade Park Vile Parle
            West. Immerse Yourself in MICL Jade Park Vile Parle - where natural
            beauty and modernity coexist to offer you a lifestyle of comfort and
            elegance.
          </p>
          {isMob && showMore && (
            <button
              className="btn btn-link p-0"
              onClick={() => setShowMore(false)}
            >
              Show Less...
            </button>
          )}
        </>
      )}

      {isMob && !showMore && (
        <button className="btn btn-link p-0" onClick={() => setShowMore(true)}>
          Show More...
        </button>
      )}

      <center>
        <h3 className="mt-3" style={{ fontSize: "1.15rem", fontWeight: "450" }}>
          MICL Jade Park - Highlights
        </h3>
      </center>

      <div
        className="mr0 aos-init aos-animate mt-2"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="3000"
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <ul className="whybuy">
              <li>
                <span>Exclusive Gated Community Living</span>
              </li>
              <li>
                <span>6 Green Parks nearby</span>
              </li>
              <li>
                <span>Thematic Landscapes</span>
              </li>
              {/* <li>
                <span>25000 sq ft Sky Promenade for Great Views</span>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <ul className="whybuy">
              <li>
                <span>6 kms from Mumbai Airport</span>
              </li>
              <li>
                <span>Spacious Array of 3, 4 & 5 Bed Residences</span>
              </li>
              <li>
                <span>Contemporary Architectural Masterpiece</span>
              </li>
              {/* <li>
                <span>Panoramic Views of BKC</span>
              </li> */}
            </ul>
          </div>
        </div>
        <button
          className="chat-btn btn btn-info micro-form-btn effetMoveGradient enqModal download_brochure"
          data-form="md"
          data-title="Download Brochure"
          data-btn="Download Now"
          data-enquiry="Download Brochure Welcome Text"
          data-redirect="brochure"
          data-redirect-file="brochure.pdf"
          data-toggle="modal"
          data-target="#enqModal"
          onClick={handleShowModal}
        >
          <span className="d-inline-block mi mi-download mr-1 animated slideInDown infinite"></span>{" "}
          Download Brochure
        </button>
      </div>
    </section>
  );
};

export default Details;
