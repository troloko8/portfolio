import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import me from './../../../img/Me.png'

export const AboutMain = (props) => {

  const mainInfo = useRef(null)
  const meImg = useRef(null)
  return (
    <section className="about__container">
      <CSSTransition
        in={props.animateStatus}
        timeout={500}
        classNames="mainInfo"
        nodeRef={mainInfo}
      >
        <div className="about__box mainInfo" ref={mainInfo}>
          <h2 className="about__title">
            about me
         </h2>
          <h6 className="about__plusTitle">
            I am a beginner FrontEnd developer
        </h6>
          <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error aperiam. Eligendi ad quam eos nobis velit minus ullam rerum quos rem earum, fuga a ducimus culpa fugit ex tenetur?</p>
        </div>
      </CSSTransition>
      <div className="about__box">
        <CSSTransition
          in={props.animateStatus}
          timeout={1000}
          classNames="me-img"
          nodeRef={meImg}
        >
          <img src={me} className="me-img" ref={meImg} />
        </CSSTransition>
      </div>
    </section>
  )
}