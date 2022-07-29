import React from "react";
import "./qualification.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  return (
    <section id="qualification">
      <h5>My personal journey</h5>
      <h2>Qualification</h2>

      <div className="container qualification_container">
        <div className="qualification__sections">
          {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            {/* <!--=============== QUALIFICATION 1 ===============--> */}

            {/* <!--=============== QUALIFICATION 2 ===============--> */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h5>Bachelor of Technology</h5>
                <h5>Mechanical Engineering</h5>
                <h3>Netaji Subhas University of Technology</h3>
                <h5>Grade: 8.32GPA</h5>
                <div className="qualification__calendar">
                  <FaRegCalendarAlt /> &nbsp;
                  <span>2019-2023</span>
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 3 ===============--> */}
            <div className="qualification__data">
              <div>
                <h5>Bachelor of Science, Online Degree</h5>
                <h5>Data Science &amp; Programming</h5>
                <h3>IIT, Madras</h3>
                <h5>Grade: 8.80GPA</h5>
                <div className="qualification__calendar">
                  <FaRegCalendarAlt /> &nbsp;
                  <span>2020-2025</span>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 4 ===============--> */}
            <div className="qualification__data">
              <div></div>

              <div className="qualification__time">
                <span className="qualification__rounder"></span>
                {/* <!-- <span className="qualification__line"></span> --> */}
              </div>

              <div>
                <h5>Senior Secondary Schooling</h5>
                <h5>PCM with Economics</h5>
                <h3>ASN Senior Secondary School</h3>
                <h5>Grade: 87%</h5>
                <div className="qualification__calendar">
                  <FaRegCalendarAlt /> &nbsp;
                  <span>2018-2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
