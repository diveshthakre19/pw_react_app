import React from "react";
import student1 from "../images/divyansh-sanghal.png";
import student2 from "../images/harshit-gupta.png";
import student3 from "../images/lsa-maurya-1.png";
import student4 from "../images/penta-harshani.png";
import student5 from "../images/divyansh-sanghal.png";
import student6 from "../images/divyansh-sanghal.png";
import student7 from "../images/divyansh-sanghal.png";
import student8 from "../images/divyansh-sanghal.png";
import student9 from "../images/divyansh-sanghal.png";
import student10 from "../images/divyansh-sanghal.png";

import Students from "./Students";

const Results = () => {
  return (
    <>
      <section className="section">
        <div className="main-heading text-center">
          <h2>
            Our <span> Proud </span>Learning Hub{" "}
          </h2>
          <div class="student-section">
            <Students name="Umesh Yadav" imgURL={student1} />
            <Students name="Harshit Gupta" imgURL={student2} />
            <Students name="Umesh Yadav" imgURL={student3} />
            <Students name="Umesh Yadav" imgURL={student4} />
            <Students name="Umesh Yadav" imgURL={student5} />
            <Students name="Umesh Yadav" imgURL={student6} />
            <Students name="Umesh Yadav" imgURL={student7} />
            <Students name="Umesh Yadav" imgURL={student8} />
            <Students name="Umesh Yadav" imgURL={student9} />
            <Students name="Umesh Yadav" imgURL={student10} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
