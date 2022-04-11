import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import me from './../../../img/meAbout.png'

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
            About me
         </h2>
          <h6 className="about__plusTitle">
            I am a beginner FrontEnd developer
        </h6>
          <p className="about__text">
            I love to learn, something new and create. When I'm not doing it,
            I like to travel or read books.
            I also love World of Warcraft,
            but unfortunately this is not my priority right now.
            In the future, I want to be a top-notch developer
             </p>
        </div>
      </CSSTransition>
      <div className="about__box me-box">
        <CSSTransition
          in={props.animateStatus}
          timeout={1000}
          classNames="me-img"
          nodeRef={meImg}
        >
          <img alt="Here must be I" src={me} className="me-img" ref={meImg} />
        </CSSTransition>
      </div>
    </section>
  )
}