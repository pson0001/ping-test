import React, { useState, useEffect } from "react"
import styles from "../scss/navigation.module.scss"
import { Link } from "react-router-dom"

const Navigation = props => {
  //console.log(props.pageName)
  const [activeAboutPage, setActiveAboutPage] = useState(false)
  const [activeWorkPage, setActiveWorkPage] = useState(false)
  const [activeContactPage, setActiveContactPage] = useState(false)

  const [showNav, setShowNav] = useState(false)
  // const [showNavSmall, setShowNavSmall] = useState(false)

  const onClick = e => {
    setCheckbox(false)
    switch (e) {
      case "about":
        setActiveAboutPage(true)
        setActiveWorkPage(false)
        setActiveContactPage(false)
        break
      case "work":
        setActiveAboutPage(false)
        setActiveWorkPage(true)
        setActiveContactPage(false)
        break
      case "contact":
        setActiveAboutPage(false)
        setActiveWorkPage(false)
        setActiveContactPage(true)
        break
      case "home":
        setActiveAboutPage(false)
        setActiveWorkPage(false)
        setActiveContactPage(false)
        break
      default:
        setActiveAboutPage(false)
        setActiveWorkPage(false)
        setActiveContactPage(false)
    }
  }
  useEffect(() => {
    let pathName = props.pageName
    //console.log(pathName)
    if (pathName === "/") {
      setActiveAboutPage(false)
      setActiveWorkPage(false)
      setActiveContactPage(false)
    } else if (pathName === "/AboutMe") {
      setActiveAboutPage(true)
      setActiveWorkPage(false)
      setActiveContactPage(false)
    } else if (pathName === "/Contact") {
      setActiveAboutPage(false)
      setActiveWorkPage(false)
      setActiveContactPage(true)
    } else {
      setActiveAboutPage(false)
      setActiveWorkPage(true)
      setActiveContactPage(false)
    }
  }, [props.pageName])
  useEffect(() => {
    let pathName = props.pageName
    //console.log(pathName)
    if (pathName !== "/") {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }, [props.pageName])
  const [checkbox, setCheckbox] = useState(false)

  return (
    <div className={styles.navContainer}>
      <ul className={styles.navBar}>
        <li>
          <Link to="/">
            <div className={styles.logoImage} onClick={() => onClick("home")} />
          </Link>
        </li>
        {showNav ? (
          <ul>
            <Link to="/AboutMe" onClick={() => onClick("about")}>
              <li
                className={
                  activeAboutPage
                    ? [styles.aboutYellow, styles.cliked].join(" ")
                    : styles.aboutYellow
                }
              >
                <span>ABOUT ME</span>
              </li>
            </Link>
            <Link to="/Work" onClick={() => onClick("work")}>
              <li
                className={
                  activeWorkPage
                    ? [styles.workPink, styles.cliked].join(" ")
                    : styles.workPink
                }
              >
                <span>WORK</span>
              </li>
            </Link>
            <Link to="/Contact" onClick={() => onClick("contact")}>
              <li
                className={
                  activeContactPage
                    ? [styles.contactBlue, styles.cliked].join(" ")
                    : styles.contactBlue
                }
              >
                <span>PING ME</span>
              </li>
            </Link>
          </ul>
        ) : null}
      </ul>

      <div>
        <input
          type="checkbox"
          id={styles.menuToggle}
          checked={checkbox}
          onClick={() => {
            setCheckbox(!checkbox)
          }}
        />
        <label id={styles.trigger} htmlFor={styles.menuToggle} />
        <label id={styles.burger} htmlFor={styles.menuToggle} />
        <ul id={styles.menu}>
          <li>
            <Link to="/AboutMe" onClick={() => onClick("about")}>
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/Work" onClick={() => onClick("work")}>
              WORK
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={() => onClick("contact")}>
              PING ME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
