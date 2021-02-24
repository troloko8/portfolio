import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { data } from './data'
import { MySocialsItem } from './MySocialsItem/MySocialsItem'

export const MySocials = (props) => {
  const title = useRef(null)

  const socials = data.map((el, index) => {
    return (
      <MySocialsItem
        state={el}
        key={index}
        animateStatus={props.animateStatus}
        index={index}
      />
    )
  })

  return (
    <section className="contacts__section">
      <CSSTransition
        in={props.animateStatus}
        timeout={500}
        classNames="title-socials"
        nodeRef={title}
      >
        <h2 className="contacts__title title-socials" ref={title}>My socials</h2>
      </CSSTransition>
      <ul className="contacts__list">
        {socials}
      </ul>
    </section>
  )

}