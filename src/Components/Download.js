import React from "react";
import personImg from "../images/alakh.png";
const Download = () => {
  return (
    <>
      <section className="section-3 section">
        <div className="container-3 flex">
          <div className="container-left">
            <div className="main-heading">
              <h2>
                Get Access to <br /> Our <br /> <span>Free Batches</span> Now
                <div className="container-bottom description">
                  <p>Get Instant Acess to High Quality Material</p>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder=" Enter Your Number "
                  />
                </div>
              </h2>
            </div>
          </div>
          <div className="container-right">
            <img src={personImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
