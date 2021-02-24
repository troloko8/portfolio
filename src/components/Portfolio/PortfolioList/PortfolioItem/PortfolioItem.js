import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { setWebsiteData } from './../../../../store/website/actions'
import { setWebsiteVisible } from './../../../../store/website/actions'
import { getCurrentPosition } from './../../../../store/website/actions'
import { getSizeItem } from './../../../../store/website/actions'

const obj = {}

const PortfolioItem = (props) => {
  const index = props.animation.index

  obj[`item${index}`] = useRef(null)

  const itemStyle = {
    backgroundImage: `url('${props.state.img}')`,
    animationDelay: `${index * 0.2 + 1}s`
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

  return (
    <CSSTransition
      in={props.animation.animateStatus}
      key={index}
      timeout={index * 200 + 1000 + 500}
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
          <h2 className="portfolio__title">{props.state.name}</h2>
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
    webSite: state.webSite
  }
}

const mapDispatchToProps = {
  setWebsiteData,
  setWebsiteVisible,
  getCurrentPosition,
  getSizeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem)