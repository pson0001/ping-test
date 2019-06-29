import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import smarter from "../../assets/smarter.svg"
import exploration1 from "../../assets/exploration-1.jpg"
import exploration2 from "../../assets/exploration-2.jpg"
import exploration3 from "../../assets/exploration-3.jpg"

const Smarter = () => {
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
      <div className={styles.header}>SMARTER Electric Application</div>
      <div className={styles.subSection}>
        <div className={styles.subContent}>
          In early this year, I worked on a Electric Usage Application in
          University. While the assessment was asked to achieve multiple
          functions. In the spirit of pushing the limit of myself, I also put
          good amount of effort in UI design.
        </div>
        <div className={styles.subContent} style={{ marginTop: "20px" }}>
          My goal for this application was:
          <ul>
            <li>Achieve functions as requirements</li>
            <li>Interesting UI design</li>
          </ul>
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "100%", margin: "auto" }}
            src={smarter}
            alt="oz-hero"
          />
        </div>
        <div className={styles.subSection}>
          <div className={styles.subHeader}>Explorations</div>
          <div className={styles.subContent}>
            This Application was using the backend of the system as RESTful web
            services (including a database) to enable querying the electricity
            usage data and updating it.
          </div>
          <div className={styles.subContent}>
            The mobile app assists residents (energy consumers) with better
            energy management by providing related information, and enabling
            them to view their energy consumption reports. If the usage is high
            during peak hours, it will provide the user with a warning message.
            Alternatively, when the usage value is low, the user will receive an
            encouraging message to continue saving. The historical data usage
            can be viewed on an hourly or daily basis using different types of
            graphs on the mobile app.
          </div>
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.hero}>
          <img
            style={{ width: "80%", margin: "auto" }}
            src={exploration1}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "80%", margin: "auto" }}
            src={exploration2}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "80%", margin: "auto" }}
            src={exploration3}
            alt="oz-hero"
          />
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

export default Smarter
