import React from "react";
import Card from "./Card";
import teacher1 from "../images/teacher1.png";
import teacher2 from "../images/teacher2.png";
import teacher4 from "../images/teacher4.png";
import teacher5 from "../images/teacher5.png";
import playImg from  "../images/googleplay.png"
import heroImg from  "../images/alakh.png"
const Hero = () => {
  return (
    <div>
      <section className="section">
        <div className="tagline">
          <h1 className="common-heading">
            THE MOST <span>AFFORDABLE</span> <br />
            LEARNING PLATFORM
          </h1>
          <p className="common-data">Learn from our best faculty.</p>
        </div>
      </section>
      <section className="section cards-section">
        <Card batch="IIT-JEE" imgURL={teacher1} />
        <Card batch="NEET" imgURL={teacher2} baground="baground-1" />
        <Card batch="NDA" imgURL={teacher5} baground="baground-2" />
        <Card batch="UPSC" imgURL={teacher4} baground="baground-3" />
        <Card batch="Patchala" imgURL={teacher5} baground="baground-4" />

        <div className="download-section">
          <div className="right-section">
            <div className="top-card">
              <h2>Download Our App</h2>
              <p>
                Access the quality <br />
                Educational.
              </p>
            </div>
            <div className="play-img">
              <img src={playImg} alt="" />
            </div>
          </div>
          <div className="left-section">
            <div className="mobile-img">
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
