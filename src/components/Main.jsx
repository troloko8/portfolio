import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Navigation } from './Header/Navigation/Navigation'
import rocket from './../icons/rocket.png'
import tech from './../icons/technology.png'
import tech1 from './../icons/technology_1.png'
import nanotech from './../icons/nanotechnology.png'
import nanotechYellow from './../icons/nanotechnology_yellow.png'
import device from './../icons/numeric-device.png'
import cpu from './../icons/cpu.png'
import project from './../icons/project-management.png'
import support from './../icons/technical-support.png'
import biotechnology from './../icons/biotechnology.png'
import detail from './../icons/detail.png'
import chip from './../icons/chip.png'
import numeric from './../icons/numeric-device.png'
import planet from './../icons/planet-earth.png'
import { Score } from './Wrapper/Score'
import { Rockets } from './Wrapper/Rockets/Rockets'

//fix problem with Header in safari
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


const maxY = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)

const maxX = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
)

const maxSize = maxY + maxX

function calcOpacity(currentValue, index = 0) {
  return { opacity: index + 1 - (100 * currentValue / maxSize / 100) }
}


export const Main = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [animateStatus, setAnimateStatus] = useState(false)
  const [rotate, setRotate] = useState(0)
  const [curXY, setCurXY] = useState({ x: 0, y: 0 })
  const intro = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    waitingPage(setLoadingStatus)
    return function () {
      setAnimateStatus(false)
    }
  }, [])

  useEffect(() => {
    if (loadingStatus && (props.path.pathname === '/')) {
      setAnimateStatus(true)
    } else {
      setAnimateStatus(false)
    }
  }, [loadingStatus, props.path.pathname])

  useEffect(() => {
    if (rotate >= 5000) {
      setAnimate(true)
    }
  }, [rotate])

  const parallax = (e) => {
    let calc = Math.abs(e.movementX + e.movementY)

    requestAnimationFrame(() => {
      setCurXY({ x: e.clientX, y: e.clientY })
      calc = calc >= 100 ? 100 : calc
      setRotate(calc / 3 + rotate)
    });
  }

  return (
    <CSSTransition
      in={animateStatus}
      timeout={2000}
      classNames="main"
      nodeRef={intro}
    >
      <div
        ref={intro}
        className="introductory main"
        onMouseMove={(e) => parallax(e)}>
        {/* left-top */}
        <img className='icon rotate3d left-top1 size1' style={calcOpacity(curXY.x + curXY.y, 0.1)} src={tech1} alt='O_o sry' />
        <img className='icon rotate left-top2 size2' style={calcOpacity(curXY.x + curXY.y, 0.25)} src={nanotech} alt='O_o sry' />
        <img className='icon movement left-top3' style={calcOpacity(curXY.x + curXY.y, 0.375)} src={device} alt='O_o sry' />
        <img className='icon left-top4 shadowRotate' style={calcOpacity(curXY.x + curXY.y, 0.15)} src={chip} alt='O_o sry' ></img>
        <img className='icon left-top5 jump' style={calcOpacity(curXY.x + curXY.y, 0.2)} src={biotechnology} alt='O_o sry' ></img>
        <img className='icon left-top6 line' style={calcOpacity(curXY.x + curXY.y, 0.15)} src={detail} alt='O_o sry' ></img>
        <img className='icon left-top7 pulse' style={calcOpacity(curXY.x + curXY.y, 0.1)} src={planet} alt='O_o sry' ></img>
        {/* left-bootom  */}
        <img className='icon rotate3d left-bootom1' style={calcOpacity(curXY.x + (maxY - curXY.y), 0.2)} src={support} alt='O_o sry' />
        <img className='icon swaying left-bootom2' style={calcOpacity(curXY.x + (maxY - curXY.y), 0.25)} src={tech} alt='O_o sry' />
        <img className='icon rotate left-bootom3' style={calcOpacity(curXY.x + (maxY - curXY.y), 0.25)} src={nanotechYellow} alt='O_o sry' />
        <img className='icon left-bottom4 movement' style={calcOpacity(curXY.x + (maxY - curXY.y), 0.1)} src={numeric} alt='O_o sry' ></img>
        <img className='icon left-bottom5 pulse' style={calcOpacity(curXY.x + (maxY - curXY.y), 0.1)} src={planet} alt='O_o sry' ></img>
        {/* right-top */}
        <img className='icon swaying right-top1' style={calcOpacity(maxX - curXY.x + curXY.y, 0.2)} src={tech} alt='O_o sry' />
        <img className='icon movement right-top2' style={calcOpacity(maxX - curXY.x + curXY.y, 0.125)} src={device} alt='O_o sry' />
        <img className='icon rotate right-top3' style={calcOpacity(maxX - curXY.x + curXY.y, 0.25)} src={nanotech} alt='O_o sry' />
        <img className='icon right-top4 line' style={calcOpacity(maxX - curXY.x + curXY.y, 0.25)} src={detail} alt='O_o sry' ></img>
        <img className='icon right-top5 shadowRotate' style={calcOpacity(maxX - curXY.x + curXY.y, 0.1)} src={chip} alt='O_o sry' ></img>
        <img className='icon right-top6 jump' style={calcOpacity(maxX - curXY.x + curXY.y, 0.25)} src={biotechnology} alt='O_o sry' ></img>
        {/* right-bottom  */}
        <img className='icon rotate right-bottom1' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.2)} src={nanotechYellow} alt='O_o sry' />
        <img className='icon rotate3d right-bottom2' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.2)} src={tech1} alt='O_o sry' />
        <img className='icon rotate3d right-bottom3' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.35)} src={support} alt='O_o sry' />
        <img className='icon right-bottom4 pulse' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.1)} src={planet} alt='O_o sry' ></img>
        <img className='icon right-bottom5 movement' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.15)} src={device} alt='O_o sry' ></img>
        <img className='icon right-bottom6 jump' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.25)} src={biotechnology} alt='O_o sry' ></img>
        <img className='icon right-bottom7 line' style={calcOpacity(maxSize - (curXY.x + curXY.y), 0.15)} src={detail} alt='O_o sry' ></img>
        {/* floating */}
        <img className='icon rocket icon-rocket' style={{ transform: `rotate(${rotate}deg)` }} src={rocket} alt='O_o sry' />
        <img className='icon brokenRocket' style={{ transform: `rotate(${rotate}deg)` }} src={rocket} alt='O_o sry' />
        <img className='icon cpu icon-cpu' style={{ transform: `rotate(${rotate}deg)` }} src={cpu} alt='O_o sry' />
        {/* project */}
        <img className={`icon icon-project ${!animate ? '' : 'project'}`}
          src={project} style={{ opacity: rotate / 5000 }} alt='O_o sry' ></img>
        {/* container  */}
        <div className="introductory__container">
          <div className="introductory__picture"></div>
          <span className="introductory__name">Anatolii Tytarenko</span>
          <h1 className="introductory__title">Portfolio site</h1>
          <Navigation />
        </div>
        <Score score={rotate} animate={animate} />
        <Rockets animate={animate} />
      </div>
    </CSSTransition>
  )
}
