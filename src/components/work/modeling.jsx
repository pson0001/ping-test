import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import hero from "../../assets/hero.png"
import modelingSence from "../../assets/modeling-2.jpg"
import modelingCamera from "../../assets/modeling-3.jpg"
import modelingCamera2 from "../../assets/modeling-4.jpg"

const Modeling = () => {
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
      <div className={styles.header}>3D Modeling</div>

      <div className={styles.subSection} style={{ marginTop: "0" }}>
        <div className={styles.subSection} style={{ marginTop: "0" }}>
          <div className={styles.subContent}>
            As the bachelor of industrial design background, I am also capable
            of establish 3D model in software. It is an advantage of spatial
            imagination and preview of production build. ​
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={hero}
              alt="oz-hero"
            />
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={modelingSence}
              alt="oz-hero"
            />
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={modelingCamera}
              alt="oz-hero"
            />
          </div>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={modelingCamera2}
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

export default Modeling
