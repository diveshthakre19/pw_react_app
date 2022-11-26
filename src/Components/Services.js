import React from "react";
import lineImg from "../images/line1.svg"
const Services = ({ imgSrc , data , cls , serviceName}) => {
  return (
    <div>
      <div class={cls}>
        <div class="service-image">
          <img src={imgSrc} alt="" />
        </div>
        <div class="description">
          <h3 class="secondary-heading">{serviceName}</h3>
          <p>{data}</p>
        </div>
      </div>
      <div class="line">
        <img src={lineImg} alt="" />
      </div>
    </div>
  );
};

export default Services;
