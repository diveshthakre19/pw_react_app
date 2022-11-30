import React from "react";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import hero1 from "../images/hero1.svg";

function Section1() {
  return (
    <>
      <section classNameName="section">
        <div classNameName="main-heading">
          <h2>
            {" "}
            <span>PW Pathshala </span> A Blended <br /> Solution For The New{" "}
            <br /> Normal.
          </h2>
          <p className="description">
            Pathshala is an engaging blend of traditional and online learning{" "}
            <br /> for giving students best e-learning platform in this new
            normal.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="features-section">
          <div className="right-feature ">
            <h3 className="sub-heading">Features & Benefits</h3>

            <div className="list-items">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
              <p className="list">
                {" "}
                Live-Schedule Live Scheduled Lectures by best faculties of India{" "}
              </p>
            </div>
            <div className="list-items">
              <div className="icon">
                <img src={icon2} alt="" />
              </div>
              <p className="list">
                {" "}
                Interactive classNamees for better understanding{" "}
              </p>
            </div>
            <div className="list-items">
              <div className="icon">
                <img src={icon3} alt="" />
              </div>
              <p className="list"> classNamees with online setting </p>
            </div>
            <div className="list-items">
              <div className="icon">
                <img src={icon4} alt="" />
              </div>
              <p className="list"> Personalized attention for all students </p>
            </div>
            <div className="button-area">
              <button className="btn">view our centers</button>
            </div>
          </div>
          <div className="left-feature">
            <img src={hero1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
