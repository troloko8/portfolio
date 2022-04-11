import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

const SkillsItem = (props) => {

  const score = props.score
  const [colorValue] = useState(`hsl(${Math.random() * score}, ${score * 0.8}%, ${60}%)`)
  const [scrollValue, setScrollValue] = useState(0)
  const item = useRef(null)

  useEffect(() => {
    setScrollValue(item.current.getBoundingClientRect().top - window.innerHeight + item.current.getBoundingClientRect().height)
  }, [])

  return (
    <CSSTransition
      in={scrollValue <= props.wrapper.scrollValue}
      timeout={300}
      classNames="skills__item"
      nodeRef={item}
    >
      <li className={`skills__item ${score > 50 ? 'more50' : ''}`} ref={item}>
        <span className="skills__score">
          {props.skill}
        </span>
        <div className="skills__circle">
          <div
            className="skills__left half-circle"
            style={{
              transform: `rotate(${score * 3.6}deg)`,
              borderColor: colorValue
            }}
          >
          </div>
          <div
            className="skills__right half-circle"
            style={{
              borderColor: colorValue
            }}
          ></div>
        </div>
      </li>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => {
  return {
    wrapper: state.wrapper
  }
}

export default connect(mapStateToProps)(SkillsItem)