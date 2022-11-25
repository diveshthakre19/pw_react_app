import React from "react";

const Counter = () => {
  return (
    <>
      <section>
        <div className="banner">
          <div className="banner-head">
            <div className="banner-top tagline">
              <h2 className="common-heading text-white">
                India's Most Loved Educational Platform
              </h2>
              <p className="text-white">
                With Physics Wallah, Begin your journey to success.
              </p>
            </div>
          </div>
          <div className="grid numbers section">
            <div className="common-heading text-white">
              6 M+
              <p className="text-white">Happy students</p>
            </div>
            <div className="common-heading text-white">
              13700+
              <p className="text-white">Video Lectures</p>
            </div>
            <div className="common-heading text-white">
              2500+
              <p className="text-white">Mock Test</p>
            </div>
            <div className="common-heading text-white">
              70000+
              <p className="text-white">Questions</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
