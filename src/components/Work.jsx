import React, { useState, useEffect } from "react"
import styles from "../scss/work.module.scss"
import { Link } from "react-router-dom"

const Work = props => {
  const [openAnimate, setOpenAnimate] = useState(false)
  const [openfromTab, setOpenfromTab] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  useEffect(() => {
    //console.log(props.location.state)
    if (props.location.state) {
      setTimeout(() => setOpenAnimate(true), 300)
    } else {
      setOpenfromTab(true)
    }
  }, [])

  useEffect(() => {
    //nav 140px + 100 margin top
    setContentHeight(window.innerHeight - 200 - 18)
  }, contentHeight)

  const openReact = () => {
    //console.log("open react")
  }
  return (
    <div>
      {openfromTab ? null : (
        <label
          className={
            openAnimate
              ? styles.work
              : [styles.startWork, styles.work].join(" ")
          }
        />
      )}
      <div
        className={styles.workContainer}
        style={{ height: contentHeight + "px" }}
      >
        <div className={styles.react}>
          <Link to="/Work/oz360">
            <div className={styles.reactHover}>
              <div className={styles.reactContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>React Website Application</div>
                <div>
                  360OZ : Improve the mental health of international students
                </div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.beer}>
          <Link to="/Work/Beer">
            <div className={styles.beerHover}>
              <div className={styles.beerContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>IOS Application</div>
                <div>
                  BeeR : Help your prepare the perfect beer in desire
                  temperature
                </div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.blockchain}>
          <Link to="/Work/Blockchain">
            <div className={styles.blockchainHover}>
              <div className={styles.blockchainContent}>
                <div className={styles.logoImage} />
                <div className={styles.title}>Website UI Design</div>
                <div>Blockchain consulting and education platform Design</div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.illustration}>
          <Link to="/Work/Illustration">
            <div className={styles.illustrationHover}>
              <div className={styles.illustrationContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>Isometric Illustration</div>
                <div>Drawings of 2.5D Isometric Illustration</div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.smarter}>
          <Link to="/Work/Smarter">
            <div className={styles.smarterHover}>
              <div className={styles.smarterContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>Android Application</div>
                <div>
                  Assists residents (energy consumers) with better energy
                  management
                </div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.visualization}>
          <Link to="/Work/Visualization">
            <div className={styles.visualizationHover}>
              <div className={styles.visualizationContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>D3.js Data Visualization</div>
                <div>
                  Exploring women's clothing online shopping behaviour from
                  reviews written by customers
                </div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.beetle}>
          <Link to="/Work/Beetle">
            <div className={styles.beetleHover}>
              <div className={styles.beetleContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>
                  m3pi Autonomous Drawing Robot
                </div>
                <div>
                  Three robots each encased in a decorative shell that was
                  designed and 3D-printed
                </div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.modeling}>
          <Link to="/Work/3Dmodeling">
            <div className={styles.modelingHover}>
              <div className={styles.modelingContent}>
                <div className={styles.logoImage} />

                <div className={styles.title}>3D modeling</div>
                <div> Establish 3D model in Solidworks</div>
                <div className={styles.arrow} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Work
