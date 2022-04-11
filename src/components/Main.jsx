import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Navigation } from './Header/Navigation/Navigation'
import sky from './../img/sky.jpg'

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

export const Main = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [animateStatus, setAnimateStatus] = useState(false)
  const intro = useRef(null)

  useEffect(() => {
    waitingPage(setLoadingStatus)
  }, [])

  useEffect(() => {
    if (loadingStatus) {
      setAnimateStatus(true)
    }
  }, [loadingStatus])

  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  const parallax = (e) => {
    requestAnimationFrame(() => {
      setTranslate({ x: e.clientX / 50, y: e.clientY / 100 })
    });
  }

  return (
    <CSSTransition
      in={animateStatus}
      timeout={1000}
      classNames="main"
      nodeRef={intro}
    >
      <div
        ref={intro}
        className="introductory main"
        onMouseMove={(e) => parallax(e)}>
        <img
          alt="Ooops, here must be my background!"
          src={sky}
          className="introductory__background"
          style={{ transform: `translate(${translate.x}px,${translate.y}px)` }}
        />
        <div className="introductory__container">
          <div className="introductory__picture"></div>
          <span className="introductory__name">Anatolii Tytarenko</span>
          <h1 className="introductory__title">Portfolio site</h1>
          <Navigation />
        </div>
      </div>
    </CSSTransition>
  )
}
