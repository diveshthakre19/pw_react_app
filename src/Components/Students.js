import React from "react";

const Students = ({ imgURL, studentName }) => {
  return (
    <>
      <div class="students s1">
        <img src={imgURL} alt="topimage" />
        <div class="tertary-heading">{studentName}</div>
      </div>
    </>
  );
};

export default Students;
