import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main id="main">
        <section id="about" class="about">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>JOIN</h2>
              <p>How to join</p>
            </div>

            <div class="row content" data-aos="fade-up">
              <div class="col-lg-6">
                <p>To join, we need you to:</p>
                <ul>
                  <li>
                    <i class="ri-check-double-line"></i> Live in India and be
                    over the age of 18.
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> Have an internet
                    connection. This is because tasks will be sent directly to
                    your device through the EK website. Don’t worry if you are
                    not familiar with this technology, there is plenty of help
                    available.
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> Decide which of the EK
                    Volunteer Responder role/s you would like to do.
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <ul>
                  <li>
                    <i class="ri-check-double-line"></i> Consider your own
                    health condition when choosing role/s. If you are clinically
                    vulnerable to coronavirus (COVID-19) you may prefer our
                    telephone-based Check In and Chat roles.{" "}
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i>Be able to volunteer and
                    go on duty as much as you possibly can.
                  </li>
                </ul>
                <a href="/volunteer-info" class="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" class="features">
          <div class="container">
            <ul class="nav nav-tabs row d-flex">
              <li class="nav-item col-3" data-aos="zoom-in">
                <a class="nav-link show" data-bs-toggle="tab" href="/volunteer-info/1">
                  <h4 class="d-lg-block" >How the program works?</h4>
                </a>
              </li>
              <li
                class="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Link to="/volunteer-info/1" style={{ textDecoration: "none" }}>
                  <a
                    class="nav-link show"
                    data-bs-toggle="tab"
                    href="/volunteer-info/2"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <h4 class=" d-lg-block">Volunteer Roles</h4>
                  </a>
                </Link>
              </li>
              <li
                class="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <a class="nav-link" data-bs-toggle="tab" href="/volunteer-info/3">
                  <h4 class=" d-lg-block">
                    Who's life you will be brightening
                  </h4>
                </a>
              </li>
              <li
                class="nav-item col-3"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <a class="nav-link" data-bs-toggle="tab" href="/volunteer-info/4">
                  <h4 class=" d-lg-block">Offline Options</h4>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
