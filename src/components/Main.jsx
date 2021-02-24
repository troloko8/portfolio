import React, { useState, useEffect } from 'react'

import { Navigation } from './Header/Navigation/Navigation'
import sky from './../img/sky.jpg'

export const Main = (props) => {

  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  const parallax = (e) => {
    requestAnimationFrame(() => {
      setTranslate({ x: e.clientX / 50, y: e.clientY / 100 })
    });
  }

  return (
    <div className="introductory" onMouseMove={(e) => parallax(e)}>
      <img
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
  )
}
