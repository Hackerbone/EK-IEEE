import React from "react";
import { Link } from "react-router-dom";

const Communication = () => {
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
              <h2>Sight Loss Help</h2>
              <ol>
                <li>
                  <a href="/volunteer-info">Home</a>
                </li>
                <li>Sight Loss Help</li>
              </ol>
            </div>
          </div>
        </section>

        <section class="inner-page">
          <div class="container">
            <h2 style={{ fontWeight: "bolder" }}>
              Supporting and guiding someone with sight loss
            </h2>
            <h3 style={{ fontWeight: "lighter", color: "#747474" }}>
              Communication
            </h3>
            <ul>
              <li>
                Always verbally introduce yourself and speak directly to the
                person.
              </li>
              <li>
                When speaking to someone always use their name (if known).
              </li>
              <li>
                If you don’t know their name it can be helpful to say, "Hello I
                am …. Can I help you with anything"?
              </li>
              <li>
                Speak and avoid relying on non-verbal gestures such as pointing
                or nodding/shaking your head.
              </li>
              <li>
                Don’t be scared to offer help if you think the person might want
                assistance if you are unsure just ask them.
              </li>
              <li>Give the person a little extra time to respond.</li>
              <li>
                Always tell the person if you are going to leave them alone.
              </li>
              <li>
                Always tell the person if you are going to hand them over to
                someone else.
              </li>
            </ul>
            <h3 style={{ fontWeight: "lighter", color: "#747474" }}>
              Verbal guiding (allows for 2 meter social distancing rule)
            </h3>
            <ul>
              <li>
                Ask the person if they would like to be guided and follow their
                preferences.
              </li>
              <li>
                If support is required, ask the person if they want you to walk
                in front, side, or back of them.
              </li>
              <li>
                Provide the person with clear verbal instruction, describing the
                route you are taking, and avoiding all obstacles.
              </li>
              <li>
                Go at the person's pace and give enough time to warn of changes
                in direction or potential obstacles.
              </li>
              <li>
                Tell the person what you are doing and explain each step
                especially if it involves physical contact.
              </li>
              <li>
                Follow these tips for people arriving at or leaving the
                vaccination site.
              </li>
            </ul>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/volunteer-info/3">
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
              <Link to="/volunteer-info/5">
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

export default Communication;
