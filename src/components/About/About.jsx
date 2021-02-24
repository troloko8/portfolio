import React, { useState, useEffect, useRef, Suspense } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { Footer } from './../Footer/Footer'
import { AboutMain } from './AboutMain/AboutMain'
import AboutRandomFacts from './AboutRandomFacts/AboutRandomFacts'
import { AboutSkills } from './AboutSkills/AboutSkills'
import { toggleHeaderAnimation } from './../../store/header/actions'

const pageLoadingStatus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(document.readyState === 'complete')
    }, 1000);
  })
}

const waitingPage = async (state) => {
  if (await pageLoadingStatus()) {
    return state(true)
  } else {
    return await waitingPage(state)
  }
}

const About = (props) => {

  const about = useRef(null)
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [animateStatus, setAnimateStatus] = useState(false)

  useEffect(() => {
    waitingPage(setLoadingStatus)
  }, [])

  useEffect(() => {
    if (loadingStatus && props.path.pathname === '/About') {
      setAnimateStatus(true)
    }
  }, [loadingStatus])

  return (
    <CSSTransition
      in={animateStatus}
      timeout={1000}
      classNames="about"
      nodeRef={about}
      onEnter={() => props.toggleHeaderAnimation(true)}
    >
      <div className="about " ref={about} >
        <AboutMain animateStatus={animateStatus} />
        <AboutRandomFacts />
        <AboutSkills />
        <Footer />
      </div>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  toggleHeaderAnimation,
}

export default connect(mapStateToProps, mapDispatchToProps)(About)