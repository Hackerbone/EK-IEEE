import React from "react";
import "./style.css";

const Header = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-end align-items-center"
    >
      <div
        id="heroCarousel"
        data-bs-interval="5000"
        className="container carousel carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">
              Welcome to <span>EK</span>
            </h2>
            <p className="animate__animated fanimate__adeInUp">
              We’re here to help people in India to stay safe during coronavirus
              (COVID-19) or any other mental issues, and to support the
              government care services as private health service dedicated to
              the lives of the people. As part of this work our volunteers will
              be able to help with the coronavirus vaccination programme.
            </p>
            <a
              href="#about"
              className="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bx bx-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bx bx-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hero-waves"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" fill="rgba(255,255,255, .2)" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
    </section>
  );
};

export default Header;
