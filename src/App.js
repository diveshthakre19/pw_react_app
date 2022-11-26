import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Counter from "./Components/Counter";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Services from "./Components/Services";
import featureImg1 from "./images/feature1.svg";
import featureImg2 from "./images/feature2.svg";
import featureImg3 from "./images/feature3.svg";
import featureImg4 from "./images/feature4.svg";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counter />
      <Section1 />
      <Section2 />
      <section className="section">

      <Services imgSrc={featureImg1}cls="services"
        serviceName="Live / Scheduled Lectures"
        data="Learning is an important step for achieving dreams in a student’s journey. We encourage the student to
            explore the concept in depth instead of memorizing The live lectures help us in learning the needs of the
            students and motivates the students to be creative and be passionate learners"/>

            <Services imgSrc={featureImg2}cls="services services-2"
        serviceName="Live / Scheduled Lectures"
        data="Learning is an important step for achieving dreams in a student’s journey. We encourage the student to
            explore the concept in depth instead of memorizing The live lectures help us in learning the needs of the
            students and motivates the students to be creative and be passionate learners"/>

<Services imgSrc={featureImg3}cls="services services-2"
        serviceName="Live / Scheduled Lectures"
        data="Learning is an important step for achieving dreams in a student’s journey. We encourage the student to
            explore the concept in depth instead of memorizing The live lectures help us in learning the needs of the
            students and motivates the students to be creative and be passionate learners"/>

<Services imgSrc={featureImg4}cls="services services-3"
        serviceName="Live / Scheduled Lectures"
        data="Learning is an important step for achieving dreams in a student’s journey. We encourage the student to
            explore the concept in depth instead of memorizing The live lectures help us in learning the needs of the
            students and motivates the students to be creative and be passionate learners"/>
            </section>
    </div>
  );
};

export default App;
