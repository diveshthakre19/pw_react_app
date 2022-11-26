import React from 'react'
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import icon4 from "../images/icon4.svg"
import hero1 from "../images/hero1.svg"

function Section1() {
    return (
        <>
            <section className='section'>
                <div className='main-heading'>
                    <h2> <span>PW Pathshala </span> A Blended <br /> Solution For The New <br /> Normal.</h2>
                    <p class="description">Pathshala is an engaging blend of traditional and online learning <br /> for giving students best e-learning platform in this new normal.</p>
                </div>
            </section>
            <section class="section">
                <div class="features-section">
                <div class="right-feature ">
                    <h3 class="sub-heading">Features & Benefits</h3>

                    <div class="list-items">
                    <div class="icon"><img src={icon1} alt="" /></div>
                    <p class="list"> Live-Schedule Live Scheduled Lectures by best faculties of India </p>
                    </div>
                    <div class="list-items">
                    <div class="icon"><img src={icon2} alt="" /></div>
                    <p class="list"> Interactive classes for better understanding </p>
                    </div>
                    <div class="list-items">

                    <div class="icon"><img src={icon3} alt="" /></div>
                    <p class="list"> classes with online setting </p>
                    </div>
                    <div class="list-items">
                    <div class="icon"><img src={icon4} alt="" /></div>
                    <p class="list"> Personalized attention for all students </p>
                    </div>
                    <div class="button-area">
                    <button class="btn">view our centers</button>
                    </div>
                </div>
                <div class="left-feature">
                    <img src={hero1} alt="" />
                </div>
                </div>
            </section>

        </>
    )
}

export default Section1
