import React, { useEffect } from "react"
import { Switch, Route, withRouter } from "react-router-dom"
// import { TransitionGroup, CSSTransition } from "react-transition-group"
import styles from "../scss/container.module.scss"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Work from "./Work"
import Oz360 from "./work/oz"
import Beer from "./work/beer"
import Beetle from "./work/beetle"
import Blockchain from "./work/blockchain"
import Illustration from "./work/illustration"

import Modeling from "./work/modeling"
import Smarter from "./work/smarter"
import Visualization from "./work/visualization"

import Contact from "./Contact"

const Container = props => {
  useEffect(() => {
    props.getPathnameContainer(props.location.pathname)
  })
  return (
    <div className={styles.container}>
      <div>
        <section className={styles.routeSection}>
          <Switch location={props.location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Work" component={Work} />
            <Route exact path="/Work/oz360" component={Oz360} />
            <Route exact path="/Work/Beer" component={Beer} />
            <Route exact path="/Work/Blockchain" component={Blockchain} />
            <Route exact path="/Work/Illustration" component={Illustration} />
            <Route exact path="/Work/Smarter" component={Smarter} />
            <Route exact path="/Work/Visualization" component={Visualization} />
            <Route exact path="/Work/Beetle" component={Beetle} />
            <Route exact path="/Work/3Dmodeling" component={Modeling} />

            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </section>
        {/* </CSSTransition>
          </TransitionGroup> */}
      </div>
    </div>
  )
}

export default withRouter(Container)
