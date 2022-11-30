import React from "react";

const Students = ({ imgURL, studentName }) => {
  return (
    <>
      <div className="students s1">
        <img src={imgURL} alt="topimage" />
        <div className="tertary-heading">{studentName}</div>
      </div>
    </>
  );
};

export default Students;
