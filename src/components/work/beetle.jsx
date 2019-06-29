import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import bettle from "../../assets/bettle-hero.jpg"
import base from "../../assets/base.jpg"
import solid1 from "../../assets/solid1.jpg"
import solid2 from "../../assets/solid2.jpg"
import computerDrawing from "../../assets/p5_3.png"
import drawing1 from "../../assets/drawing1.jpg"
import drawing2 from "../../assets/drawing2.jpg"

const Bettle = () => {
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
      <div className={styles.header}>Autonomous Robot</div>

      <div className={styles.subSection} style={{ marginTop: "0" }}>
        <div className={styles.subSection} style={{ marginTop: "0" }}>
          <div className={styles.subContent}>
            This project was undertaken by Hersh Nevgi & Ping Song between late
            November '17 to early February '18 at the Monash sensilab, under the
            supervision of Jon McCormack and Elliott Wilson.
          </div>
        </div>

        <div className={styles.subSection}>
          <div className={styles.subContent}>
            We've produced three robots each encased in a decorative shell that
            was designed and 3D-printed here in the lab. We built off the
            software written by Kim Alford, Andrew Barnhill and other students
            who've worked on this project previously, while we removed, added,
            and re-purposed existing components on the chassis of the Pololu
            m3pi robots. These robots are now equipped with:
          </div>
          <div className={styles.subContent} style={{ marginTop: "20px" }}>
            <ul>
              <li>
                3 x VL6180x time-of-flight sensors, for obstacle avoidance
              </li>
              <li>
                1 x ISL29125 colour sensor, for line sensing (presence and
                colour)
              </li>
              <li>1 x SG90 servo motor, as part of a pen-lifting mechanism</li>
            </ul>
          </div>
        </div>

        <div className={styles.subSection}>
          <div className={styles.subHeader}>The outcome</div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={bettle}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subHeader}>The process</div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={base}
              alt="oz-hero"
            />
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "50%", margin: "auto" }}
              src={solid1}
              alt="oz-hero"
            />
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "50%", margin: "auto" }}
              src={solid2}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subHeader}>Computer simulated drawings</div>
          <div className={styles.hero}>
            <img
              style={{ width: "50%", margin: "auto" }}
              src={computerDrawing}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subHeader}>Actual drawings</div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={drawing1}
              alt="oz-hero"
            />
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={drawing2}
              alt="oz-hero"
            />
          </div>
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

export default Bettle
