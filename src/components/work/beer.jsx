import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import signup from "../../assets/signup.jpg"
import signin from "../../assets/signin.jpg"
import history from "../../assets/history.jpg"
import newdrink from "../../assets/in.jpg"
import process from "../../assets/process.jpg"
import havehistory from "../../assets/havehistory.jpg"

const Beer = () => {
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
      <div className={styles.header}>BeeR : IoT Project Implementation</div>

      <div className={styles.subSection}>
        <div className={styles.subContent}>
          Our project's name is BeeR. The project aims to help the user to find
          the perfect beer with the customized preference of different criteria.
        </div>
        <div className={styles.subContent}>
          Our system is the target on people like beer and wants to have a
          perfect experience while drinking beer. The user can have their online
          account to record their preference of certain temperature of the
          particular brand. Thus we can provide customised service for each
          user, and the user doesn't need to manually set it next time when they
          drink the same brand of the beer. The temperature detected by the
          sensor. Thus the user can have an accurate visualization of the beer
          temperature to ensure it is in the perfect temperature range. The
          total amount of daily drinking would be recorded by the app, which can
          notify user not to drink more than the recommended alcohol intakes to
          prevent alcohol abuse. The app would inform the user when some object
          close to the drink to avoid the children reach the alcohol.
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.hero}>
          <img
            style={{ width: "60%", margin: "auto" }}
            src={signup}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "60%", margin: "auto" }}
            src={signin}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "60%", margin: "auto" }}
            src={history}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "60%", margin: "auto" }}
            src={newdrink}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "60%", margin: "auto" }}
            src={process}
            alt="oz-hero"
          />
        </div>
        <div className={styles.hero}>
          <img
            style={{ width: "60%", margin: "auto" }}
            src={havehistory}
            alt="oz-hero"
          />
        </div>
      </div>
      <div className={styles.subSection}>
        <div className={styles.subHeader}> Final result</div>
        <div className={styles.subContent}>
          This project built as a three-tier architecture: Data tier, Logic
          tier, and Presentation tier. In our system, Data-tier works as the
          middle-level tier instead ofLogic Tier. Our authentication system uses
          the firebase’s authentication function. Firebase would automatically
          generate the unique user id for registered users. Our database
          separates the information of devices and users and connects the data
          by device id. For users, each user has their data of device id, weight
          and drinking history. History includes the information of drinking
          time, the beer brand, drinking temperature and drinking amount. For
          devices, each device has the data from sensors with the brand,
          temperature, proximity, and weight.In the mobile application, our
          workflow design based on the user’s type. We divided our users into
          two groups that are new users and registered users. We considered the
          difference of the workflow and carefully designed the operation path
          for our target users.
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

export default Beer
