import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import time from "../../assets/illustration.jpg"
import bank from "../../assets/IMG_4126.JPG"
import block from "../../assets/IMG_4127.PNG"

const Illustration = () => {
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
      <div className={styles.header}>Some Isometric Illustrations </div>

      <div className={styles.subSection} style={{ marginTop: "0" }}>
        <div className={styles.subSection} style={{ marginTop: "0" }}>
          <div className={styles.content}>
            {`There are some of my isometric illustrations :)`}
          </div>
        </div>

        <div className={styles.subSection}>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={time}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={bank}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={block}
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

export default Illustration
