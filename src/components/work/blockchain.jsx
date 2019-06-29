import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import homepage from "../../assets/Homepage.png"
import consulting from "../../assets/Consulting.png"
import education from "../../assets/Education.png"

const Blockchain = () => {
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
        Website Design for consulting & educating company
      </div>

      <div className={styles.subSection}>
        <div className={styles.hero}>
          <img
            style={{ width: "100%", margin: "auto" }}
            src={homepage}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "100%", margin: "auto" }}
            src={consulting}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "100%", margin: "auto" }}
            src={education}
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

export default Blockchain
