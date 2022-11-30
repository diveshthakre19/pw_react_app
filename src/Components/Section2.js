import React from "react";
import heroImg from "../images/alakh-sir-web-launch.png";
const Section2 = () => {
  return (
    <div>
      <div className="section">
        <div className="main-heading text-center">
          <h2>
            {" "}
            Learn from <span>The Best </span>{" "}
          </h2>
          <p className="description text-center">
            Explore the concepts with India’s most experienced Teachers!
          </p>
        </div>
        <div className="main-banner flex">
          <img src={heroImg} alt="" />
        </div>
        <section className="section">
          <div className="main-heading text-center">
            <h2>
              {" "}
              Why <span> Physics Wallah?</span>{" "}
            </h2>
            <p className="description text-center">
              Your One Stop Destination For Success
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section2;
