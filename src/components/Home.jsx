import React, { useState, useEffect } from "react"
import styles from "../scss/home.module.scss"
import { Link } from "react-router-dom"

const Home = props => {
  const [openAbout, setOpenAbout] = useState(false)
  const [openWork, setOpenWork] = useState(false)
  const [openContact, setOpenContac] = useState(false)

  const openAboutMePage = e => {
    e.preventDefault()

    setOpenAbout(true)
    window.setTimeout(() => {
      props.history.push({
        pathname: "/AboutMe",
        state: { detail: true }
      })
    }, 300)
  }

  const openWorkPage = e => {
    e.preventDefault()

    setOpenWork(true)
    window.setTimeout(() => {
      props.history.push({
        pathname: "/Work",
        state: { detail: true }
      })
    }, 300)
  }

  const openContactPage = e => {
    e.preventDefault()
    //console.log(e.screenX, e.screenY)

    setOpenContac(true)
    window.setTimeout(() => {
      props.history.push({
        pathname: "/Contact",
        state: { detail: true }
      })
    }, 300)
  }

  return (
    <div>
      <label
        className={
          openAbout ? [styles.startAbout, styles.about].join(" ") : styles.about
        }
      />
      <label
        className={
          openWork ? [styles.startWork, styles.work].join(" ") : styles.work
        }
      />
      <label
        className={
          openContact
            ? [styles.startContact, styles.contact].join(" ")
            : styles.contact
        }
      />

      <div className={styles.heroContainer} />
      <div className={styles.heroSentence} />
      <div className={styles.panelContainer}>
        <div className={styles.panelPosition}>
          <ul>
            <li>
              <div className={styles.panelYellow}>
                <div className={styles.panelcolumn}>
                  <div className={styles.panelTitle}>ABOUT ME</div>
                  <Link to="/AboutMe" onClick={openAboutMePage}>
                    <div className={styles.panelImageInfo} />
                  </Link>

                  <div className={styles.panelDesc}>
                    Find more about my experience and skills
                  </div>

                  <div className={styles.panelDescClick}>Click info icon</div>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.panelPink}>
                <div className={styles.panelcolumn}>
                  <div className={styles.panelTitle}>WORK</div>
                  <Link to="/Work" onClick={openWorkPage}>
                    <div className={styles.panelImageWork} />
                  </Link>
                  <div className={styles.panelDesc}>
                    Interested on what I have done in the past?
                  </div>
                  <div className={styles.panelDescClick}>Click brain icon</div>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.panelBlue}>
                <div className={styles.panelcolumn}>
                  <div className={styles.panelTitle}>PING ME</div>
                  <Link to="/Contact" onClick={openContactPage}>
                    <div className={styles.panelImageContact} />
                  </Link>
                  <div className={styles.panelDesc}>
                    Love what I do and want to talk?
                  </div>
                  <div className={styles.panelDescClick}>Click my icon</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
