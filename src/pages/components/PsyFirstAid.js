import React from "react";
import { Link } from "react-router-dom";

const PsyFirstAid = () => {
  return (
    <div>
      <header
        id="header"
        class="fixed-top d-flex align-items-center justify-content-space-between"
      >
        <svg
          width="47%"
          height="47%"
          viewBox="0 0 838 413"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          xmlnsSerif="http://www.serif.com/"
        >
          <g transform="matrix(1,0,0,1,-121.006,-333.674)">
            <g transform="matrix(0.999283,0,0,1.56476,-10.6009,-355.817)">
              <g transform="matrix(878.845,0,0,561.245,115.827,698.774)">
                <path
                  d="M0.313,-0.157C0.304,-0.126 0.279,-0.112 0.247,-0.112C0.202,-0.112 0.174,-0.141 0.169,-0.195L0.46,-0.195L0.46,-0.234C0.46,-0.368 0.382,-0.46 0.244,-0.46C0.114,-0.46 0.018,-0.364 0.018,-0.225C0.018,-0.085 0.109,0.01 0.247,0.01C0.364,0.01 0.442,-0.053 0.458,-0.157L0.313,-0.157ZM0.244,-0.338C0.283,-0.338 0.306,-0.31 0.308,-0.273L0.172,-0.273C0.182,-0.315 0.207,-0.338 0.244,-0.338Z"
                  fill="#fff"
                />
              </g>
              <g transform="matrix(878.845,0,0,561.245,510.049,699.146)">
                <path
                  d="M0.339,-0L0.519,-0L0.343,-0.263L0.524,-0.461L0.335,-0.461L0.199,-0.306L0.199,-0.461L0.042,-0.461L0.042,-0L0.199,-0L0.199,-0.132L0.229,-0.167L0.339,-0Z"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>
        <div class="text-align-center">
          <h1
            style={{
              textAlign: "center",
              color: "white",
              display: "block",
              margin: "auto 3rem",
            }}
          >
            Volunteer Details
          </h1>
        </div>
      </header>

      <main id="main">
        <section class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Psychological First Aid</h2>
              <ol>
                <li>
                  <a href="/volunteer-info">Home</a>
                </li>
                <li>PFA</li>
              </ol>
            </div>
          </div>
        </section>

        <section class="inner-page">
          <div class="container">
            <h2 style={{ fontWeight: "bolder" }}>
              Psychological First Aid (PFA) training
            </h2>
            <p>
              Get Psychological First Aid (PFA) online training from Public
              Health England and help people with different needs to cope with
              the emotional impact of coronavirus (COVID-19).
            </p>
            <h3>
              Visit{" "}
              <a href="https://www.futurelearn.com/courses/psychological-first-aid-covid-19">
                futurelearn.com{" "}
              </a>
              for more details
            </h3>
            <p>
              Thrive LDN has developed a new resource for people who are
              supporting communities and individuals who have been adversely
              affected by coronavirus. This document is to help those working in
              the community to know the most supportive things to say and do for
              people who are very distressed. It complements Public Health
              England's new Psychological First aid (PFA) training module.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/volunteer-info/2">
                <button
                  style={{
                    background: "#0072CE",
                    color: "white",
                    borderRadius: "5px",
                    padding: "0.5rem 1rem",
                    margin: " 0rem 1rem",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Prev
                </button>
              </Link>
              <Link to="/volunteer-info/4">
                <button
                  style={{
                    background: "#0072CE",
                    color: "white",
                    borderRadius: "5px",
                    padding: "0.5rem 1rem",
                    margin: " 0rem 1rem",
                    outline: "none",
                    border: "none",
                  }}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PsyFirstAid;
