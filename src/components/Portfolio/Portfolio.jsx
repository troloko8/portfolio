import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { Footer } from '../Footer/Footer'
import Background from './Background/Background'
import { PortfolioList } from './PortfolioList/PortfolioList'
import Website from './Website/Website'
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

const Portfolio = (props) => {
  const portfolio = useRef(null)
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [animateStatus, setAnimateStatus] = useState(false)

  useEffect(() => {
    waitingPage(setLoadingStatus)
  }, [])

  useEffect(() => {
    if (loadingStatus && props.path.pathname === '/Portfolio') {
      setAnimateStatus(true)
    }
  }, [loadingStatus, props.path.pathname])

  return (
    <CSSTransition
      in={animateStatus}
      timeout={1000}
      classNames="portfolio"
      nodeRef={portfolio}
      onEnter={() => props.toggleHeaderAnimation(true)}
    >
      <div className="portfolio " ref={portfolio}>
        <div className="portfolio__container">
          <PortfolioList animateStatus={animateStatus} />
          <Website />
          <Background />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)