import React from "react";
import lineImg from "../images/line1.svg";
const Services = ({ imgSrc, data, cls, serviceName }) => {
  return (
    <div>
      <div className={cls}>
        <div className="service-image">
          <img src={imgSrc} alt="" />
        </div>
        <div className="description">
          <h3 className="secondary-heading">{serviceName}</h3>
          <p>{data}</p>
        </div>
      </div>
      <div className="line">
        <img src={lineImg} alt="" />
      </div>
    </div>
  );
};

export default Services;
