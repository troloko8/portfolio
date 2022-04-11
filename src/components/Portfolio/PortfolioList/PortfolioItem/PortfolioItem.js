import React, { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { setWebsiteData } from './../../../../store/website/actions'
import { setWebsiteVisible } from './../../../../store/website/actions'
import { getCurrentPosition } from './../../../../store/website/actions'
import { getSizeItem } from './../../../../store/website/actions'

const obj = {}
const deviceWidth = window.screen.width

const PortfolioItem = (props) => {
  const index = props.animation.index
  const [scrollValue, setScrollValue] = useState(false)
  const timeTransition = deviceWidth <= 480 ? 500 : index * 200 + 1000
  const firstDelay = index === 0 ? 1000 : 0
  obj[`item${index}`] = useRef(null)

  const itemStyle = {
    backgroundImage: `url('${props.state.img}')`,
    animationDelay: deviceWidth <= 480 ? 0 + firstDelay + 'ms' : `${timeTransition}ms`
  }

  const changeWebsiteStatus = () => {
    props.setWebsiteVisible(true)
    props.setWebsiteData(props.state, true)
  }

  const calcSizeBlock = (e) => {
    setTimeout(() => {
      props.getSizeItem(
        e.target.closest('.portfolio__item').getBoundingClientRect().width,
        e.target.closest('.portfolio__item').getBoundingClientRect().height
      )
      props.getCurrentPosition(
        e.target.closest('.portfolio__item').getBoundingClientRect().x,
        e.target.closest('.portfolio__item').getBoundingClientRect().y
      )
    }, 300)

  }

  useEffect(() => {
    setScrollValue(window.screen.height / 1.8 >= obj[`item${index}`].current.getBoundingClientRect().top)
  }, [props.wrapper.scrollValue, index])

  useEffect(() => {
  }, [])

  return (
    <CSSTransition
      in={deviceWidth <= 480
        ? scrollValue
        : props.animation.animateStatus
      }
      key={index}
      timeout={deviceWidth <= 480
        ? 500 + firstDelay
        : timeTransition + 500
      }
      classNames="portfolio__item"
      nodeRef={obj[`item${index}`]}
    >
      <li className={`portfolio__item ${props.wrongItem ? 'portfolio__item-exaption' : ''}`}
        style={itemStyle}
        onMouseEnter={(e) => calcSizeBlock(e)}
        onMouseOut={(e) => calcSizeBlock(e)}
        ref={obj[`item${index}`]}
      >
        <div className="portfolio__box">
          <button
            className="portfolio__button"
            onClick={() => changeWebsiteStatus()}
          >More info</button>
        </div>
      </li >
    </CSSTransition>
  )
}

const mapStateToProps = (state) => {
  return {
    webSite: state.webSite,
    wrapper: state.wrapper
  }
}

const mapDispatchToProps = {
  setWebsiteData,
  setWebsiteVisible,
  getCurrentPosition,
  getSizeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem)