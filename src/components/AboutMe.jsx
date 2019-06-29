import React, { useState, useEffect } from "react"
import styles from "../scss/aboutme.module.scss"
const AboutMe = props => {
  const [openAnimate, setOpenAnimate] = useState(false)
  const [openfromTab, setOpenfromTab] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (props.location.state) {
      setTimeout(() => setOpenAnimate(true), 300)
    } else {
      setOpenfromTab(true)
    }
  }, [])

  useEffect(() => {
    //nav 140px + 100 margin top
    //console.log(window.innerHeight - 240)
    setContentHeight(window.innerHeight - 140 - 18)
  }, contentHeight)
  return (
    <div
      className={styles.aboutmeContainer}
      style={{ height: contentHeight + "px" }}
    >
      {openfromTab ? null : (
        <label
          className={
            openAnimate
              ? styles.about
              : [styles.startAbout, styles.about].join(" ")
          }
        />
      )}

      <div className={styles.cvBlock}>
        <div className={styles.cvName}>PING SONG</div>
        <div className={styles.cvSection}>
          <div className={styles.cvHeading}>Education</div>
          <div className={styles.container}>
            <div className={styles.time}>Feb 2017 - Dec 2018</div>
            <div className={styles.heading}>
              Master of Information Technology
            </div>
            <div className={styles.detail}>
              - Post Graduate Industry Experience Winner 2018
            </div>
            <div className={styles.detailMore}>
              Monash University, Melbourne
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.time}>Feb 2010 - Dec 2014</div>
            <div className={styles.heading}>Bachelor of Industry Design</div>
            <div className={styles.detail}>
              University of New South Wales, Sydney
            </div>
          </div>
        </div>

        <div className={styles.cvSection}>
          <div className={styles.cvHeading}>Skills Summary</div>
          <div className={styles.skill}>
            <div className={styles.time}>Language</div>

            <div className={styles.detail}>
              Java, Python, JavaScript, REACT.js, D3.js, HTML, SCSS, SQL, Swift
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.time}>Software</div>
            <div className={styles.detail}>
              Android Studio, R Studio, Visual Studio, Tableau
            </div>
            <div className={styles.detailMore}>
              Photoshop, Illustrator, After Effect, Sketch, Principle,
              Solidworks, Auto CAD
            </div>
          </div>
        </div>
        <div className={styles.cvSection}>
          <div className={styles.cvHeading}>Employment History</div>
          <div className={styles.employ}>
            <div className={styles.time}>Jan 2019 - Present</div>
            <div className={styles.heading}>
              Front end Developer (Monash University)
            </div>
            <div className={styles.company}>Monash eSolutions </div>

            <div className={styles.responsiblities}>Responsibilities</div>
            <div className={styles.detail}>
              Research products that provide meaningful and relevant experiences
              and create engaging user interface to users. Architect and develop
              websites and applications using HTML, Sass and React.js.
            </div>
          </div>
          <div className={styles.employ}>
            <div className={styles.time}>Dec 2017 - Feb 2018</div>
            <div className={styles.heading}>
              Summer Research Scholarship (Monash University)
            </div>
            <div className={styles.company}>Monash Sensilab</div>

            <div className={styles.responsiblities}>Responsibilities</div>
            <div className={styles.detail}>
              Designed and assembled autonomous drawing robot prototypes. Each
              robot was encased in a decorative shell that was designed and
              3D-printed by me.
            </div>
          </div>
          <div className={styles.employ}>
            <div className={styles.time}>Jan 2015 - Dec 2017</div>
            <div className={styles.heading}>Branding Designer</div>
            <div className={styles.company}>314 Design Studio, China</div>

            <div className={styles.responsiblities}>Responsibilities</div>
            <div className={styles.detail}>
              Working on a range of tasks: Leading and developing branding
              design projects. Interacting (on a daily basis) with designers,
              developers and clients.
            </div>
          </div>
        </div>
        <div className={styles.cvSection}>
          <div className={styles.cvHeading}>Highlight Projects</div>
          <div className={styles.projects}>
            <div className={styles.title}>React Website Application</div>
            <div className={styles.heading}>
              Improve the mental health of international students
            </div>

            <div className={styles.detail}>
              <li>Post Graduate Industry Experience Winner 2018</li>
              <li>
                Design and determine the workflow and content of the website
              </li>
              <li>Developing the core functions of the website using React</li>
              <li>
                Working with unstructured data geospatial analysis in display
              </li>
            </div>
            <div className={styles.skillItem}>
              <li>React.js</li>
              <li> Node.js</li>
              <li>RESTful API</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MongeDB</li>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.title}>Android Application</div>
            <div className={styles.heading}>
              Assists Victorian residents with better energy management
            </div>

            <div className={styles.detail}>
              <li>
                Built backend of the system as RESTful web services (including a
                database) to enable querying and updating the electricity usage
                data
              </li>
              <li>
                Invoking web APIs to provide the weather information for the
                current location of the residences
              </li>
              <li>
                Interactive interface design to view energy consumption reports
                delivering the user with multiple options
              </li>
            </div>
            <div className={styles.skillItem}>
              <li>Java</li>
              <li>Node.js</li>
              <li>Database Design</li>
              <li>RESTful API</li>
              <li> Open-weather API</li>
              <li>Google Map API</li>
              <li>User Interface Design</li>
            </div>
          </div>

          <div className={styles.projects}>
            <div className={styles.title}>Research Project</div>
            <div className={styles.heading}>
              Autonomous drawing robot at SensiLab
            </div>

            <div className={styles.detail}>
              <li>
                Programming the simulated habitat pattern paths for the robots
                using C++
              </li>
              <li>
                3D model design and 3D printing robot shells inline with the
                robots’ mechanical movements
              </li>
              <li>
                Optimise the algorithm to improve turning and rotation
                efficiency of the robot in order to add fluidity to the drawing
                motions that the robot makes
              </li>
            </div>
            <div className={styles.skillItem}>
              <li>Algorithm Design</li>
              <li>C++</li>
              <li>Graphic patterning</li>
              <li>3D modelling</li>
            </div>
          </div>
          <div className={styles.projects}>
            <div className={styles.title}>Rebranding Design Project</div>
            <div className={styles.heading}>
              Rebranding project for a Gas tank factory
            </div>

            <div className={styles.detail}>
              <li>
                In charge of the rebranding project of Yiqun (second biggest gas
                tank factory in China)
              </li>
              <li>
                Communication with clients, defining the project direction based
                on the client requirements and marketing research of the
                particular field
              </li>

              <li>
                Keeping the Visual Identity design direction consistent in order
                to expend and rich the branding image from all related aspects
              </li>
              <li>
                Brainstorming and developing creative new ideas and images to
                propose to the client
              </li>
              <li>
                Successfully conducted and implement the rebranding project for
                the client to keep them up with the marketing trends, and make
                them gain more value and trust from their customer
              </li>
            </div>
            <div className={styles.skillItem}>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>SketchUp</li>
              <li>Solidworks</li>
              <li>C4D</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
