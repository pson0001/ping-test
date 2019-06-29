import React, { useState, useEffect } from "react"
import styles from "../scss/contact.module.scss"

const Contact = props => {
  const [openAnimate, setOpenAnimate] = useState(false)
  const [openfromTab, setOpenfromTab] = useState(false)
  useEffect(() => {
    if (props.location.state) {
      setTimeout(() => setOpenAnimate(true), 300)
    } else {
      setOpenfromTab(true)
    }
  }, [])
  return (
    <div>
      {openfromTab ? null : (
        <label
          className={
            openAnimate
              ? styles.contact
              : [styles.startContact, styles.contact].join(" ")
          }
        />
      )}
      <div className={styles.contactContainer}>
        <div className={styles.logo} />
        <div className={styles.detail}>
          <p className={styles.title}>CONTACT ME</p>
          <p
            className={styles.content}
          >{`Interesting? Shoot me a message :)`}</p>
          <p className={styles.email}>Email: pson0001@hotmail.com</p>
          <p className={styles.content}>
            If you are interested in my experience,
          </p>
          <p className={styles.content}>
            you can pay a visit to my
            <a href="https://www.linkedin.com/in/ping-song-pson0001/">
              Linkedin profile
            </a>
            . Thank you for stopping by!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
