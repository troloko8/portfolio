import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

const obj = {}
const order = [1, 5, 4, 3, 6, 2]
export const MySocialsItem = (props) => {

  obj[`item${props.index}`] = useRef(null)

  const styles = {
    animationName: props.state.animation,
    animationDelay: `${order[props.index] * 0.15 + 1.5}s`
  }

  return (
    <CSSTransition
      in={props.animateStatus}
      timeout={order[props.index] * 150 + 1500}
      classNames="contacts__item"
      nodeRef={obj[`item${props.index}`]}
    >
      <li
        className="contacts__item"
        ref={obj[`item${props.index}`]}
        style={styles}
      >
        <a
          target="blank"
          href={props.state.link}
          className="contacts__link"
          style={{ backgroundImage: `url("${props.state.img}")` }}
        ></a>
      </li>
    </CSSTransition>
  )
}