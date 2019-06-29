import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import styles from "../../scss/projects.module.scss"

import global from "../../assets/global.jpg"
import bar from "../../assets/bar.jpg"
import final from "../../assets/final.jpg"

const Visualization = () => {
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
      <div className={styles.header}>D3.js visualisation </div>

      <div className={styles.subSection} style={{ marginTop: "0" }}>
        <div className={styles.subSection} style={{ marginTop: "0" }}>
          <div className={styles.subContent}>
            This visualisation Project is exploring women's clothing online
            shopping behavior from a Women's Clothing E-Commerce which revolving
            around the reviews written by customers. After exploration of the
            dataset, the most interesting is the behavior of what women purchase
            and what they are talking about are quick different. Also, the main
            purchasing age group is 30-40 and 40-50 instead of younger
            generation.
          </div>
        </div>

        <div className={styles.subSection}>
          <div className={styles.subHeader}>
            Global Trend of Ecommerce Fashion Industry in 2018
          </div>
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
        <div className={styles.subSection}>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={global}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subContent}>
            I started exploring the Global Trend of Ecommerce Fashion Industry.
            As known as the digital innovation, rising globalisation, and
            changes in consumer spending habits have totally changed the fashion
            industry into a new era. The dataset were categorised into different
            age group form 0-20 to 80-90.
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={bar}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subContent}>
            This graph indicate the overall purchasing count of the dataset. As
            we can see the highest bar cross all age group is product "TOP".
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.hero}>
            <img
              style={{ width: "80%", margin: "auto" }}
              src={final}
              alt="oz-hero"
            />
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.subContent} style={{ marginTop: "20px" }}>
            <ul>
              <li>
                0-20 ： Age Group 0-20 has the very small review amount. But
                Dress is the biggest proportion.
              </li>
              <li>
                20-30 : The amount of review start to growing.As expected, Dress
                still taken the first place.
              </li>
              <li>30-40 : The amount of review reached peak.</li>
              <li>40-50 : The amount of review decreasing.</li>
              <li>50-60 : The key word Love taken the first place.</li>
              <li>60-70 : Size become more important.</li>
              <li>70-80 :The proportion of review become very small.</li>
            </ul>
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

export default Visualization
