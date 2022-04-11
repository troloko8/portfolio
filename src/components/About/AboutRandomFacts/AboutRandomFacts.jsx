import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { AboutRandomFactsItem } from './AboutRandomFactsItem/AboutRandomFactsItem'
import { data } from './data'

const AboutRandomFacts = (props) => {
  const [scrollValue, setScrollValue] = useState(0)
  const randomFacts = data.map((el, index) => {
    return <AboutRandomFactsItem key={index} text={el} />
  })

  const img = useRef(null)
  useEffect(() => {
    setScrollValue(img.current.getBoundingClientRect().top - window.innerHeight / 2)
  }, [])

  return (
    <section className="about__container">
      <CSSTransition
        in={scrollValue <= props.wrapper.scrollValue}
        timeout={500}
        classNames="grot-img"
        nodeRef={img}
      >
        <div className="about__box grot-img" ref={img}></div>
      </CSSTransition>
      <div className="about__box randomFacts">
        <h6 className="randomFacts__title">Random facts</h6>
        <ul className="randomFacts__list">
          {randomFacts}
        </ul>
      </div>
    </section >
  )
}

const mapStateToProps = (state) => {
  return {
    wrapper: state.wrapper
  }
}

export default connect(mapStateToProps)(AboutRandomFacts)