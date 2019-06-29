import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"
import hero from "../../assets/work-oz-hero.png"
import plan from "../../assets/plan.svg"
import homePage from "../../assets/home.png"
import campusPage from "../../assets/campus.png"
import mapPage from "../../assets/map.png"
import locationPage from "../../assets/location.png"
import dayPage from "../../assets/day.png"

const Oz360 = () => {
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    //nav 140px + 100 margin top
    setContentHeight(window.innerHeight - 200 - 18)
  }, contentHeight)
  return (
    <div
      className={styles.projectContainer}
      style={{ height: contentHeight + "px" }}
    >
      <div className={styles.header}>
        360OZ : Post Graduate Industry Experience Winner 2018
      </div>
      <div className={styles.content}>
        A web-based application which helps reduce the impact of homesickness
        among
      </div>
      <div className={styles.content}>
        Chinese International students and assists them with a smooth transition
        to Australia.
      </div>
      <div className={styles.hero}>
        <img style={{ width: "100%" }} src={hero} alt="oz-hero" />
      </div>
      <div className={styles.subSection}>
        <div className={styles.subHeader}>Problem Overview</div>
        <div className={styles.subContent}>
          Studies suggests that the peak period of mental ill-health is between
          the age of 12 and 25 years. According to them, university students are
          more vulnerable to high levels of distress than non-university
          population. Researchers have provided evidence that mental health of
          students has deteriorated over recent decades. There is higher level
          of emotional and stress-related problems. The research draws attention
          to the fact that 70% of university students rate their mental health
          as “poor”.
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subHeader}>Project Plan Overview</div>
        <div className={styles.hero}>
          <img style={{ width: "100%" }} src={plan} alt="oz-hero" />
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subHeader}>Iteration 1 : User Journey 1</div>
        <div className={styles.subContent}>
          <ul>
            <li>
              I want to know a suitable suburb to plan for my accommodation in
              an area where I will be comfortable living in.
            </li>
            <li>
              I want to know the specific suburbs of places that match my
              cultural and social preferences so that I can stay socially
              connected.
            </li>
            <li>
              I want to know the most convenient suburb to live based on my
              hobbies so that it is easier for me to transition into living in
              Australia.
            </li>
          </ul>
          <div className={styles.hero}>
            <img style={{ width: "100%" }} src={homePage} alt="oz-hero" />
            <img style={{ width: "100%" }} src={campusPage} alt="oz-hero" />

            <img style={{ width: "100%" }} src={mapPage} alt="oz-hero" />
          </div>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subHeader}>Iteration 2 : User Journey 2 </div>
        <div className={styles.subContent}>
          <ul>
            <li>
              I want to set up the basic things e.g. finance, transportation,
              communication necessities for convenience in my day-to-day
              activities in Australia.
            </li>
            <li>
              I want to buy all the essential things early on so that I will
              feel comfortable at my new home.
            </li>
            <li>
              I want to be able to use and be familiar with public
              transportation in my area so that I am able to go to and from
              places easily.
            </li>
            <li>
              I want to visit places in Melbourne that interests me so that I
              will feel motivated to get involved into Australian ways.
            </li>
          </ul>
          <div className={styles.hero}>
            <img style={{ width: "100%" }} src={homePage} alt="oz-hero" />
            <img style={{ width: "100%" }} src={locationPage} alt="oz-hero" />

            <img style={{ width: "100%" }} src={dayPage} alt="oz-hero" />
          </div>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subHeader}> Final result</div>
        <div className={styles.subContent}>
          <span>
            For the final application, I achieved to using React.js, Node.js,
            Restful API, Mapbox API, Google API to make a useful web
            application. I enjoy being challenged and engaging with projects,
            solving problems that require me to continuing to learn new and
            development techniques.
          </span>
        </div>
      </div>
      <div className={styles.worksButton}>
        <Link to="/Work">
          <button>CHECK YOUR OTHER WORKS</button>
        </Link>
      </div>
    </div>
  )
}

export default Oz360
