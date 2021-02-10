import React from 'react'
import { connect } from 'react-redux'

import { setWebsiteData } from './../../../../store/website/actions'
import { setWebsiteVisible } from './../../../../store/website/actions'
import { getCurrentPosition } from './../../../../store/website/actions'
import { getSizeItem } from './../../../../store/website/actions'

const PortfolioItem = (props) => {

  const itemStyle = {
    backgroundImage: `url('${props.state.img}')`,
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
    <li className={`portfolio__item ${props.wrongItem ? 'portfolio__item-exaption' : ''}`}
      style={itemStyle}
      onMouseEnter={(e) => calcSizeBlock(e)}
      onMouseOut={(e) => calcSizeBlock(e)}
    >
      <div className="portfolio__box">
        <h2 className="portfolio__title">{props.state.name}</h2>
        <button
          className="portfolio__button"
          onClick={() => changeWebsiteStatus()}
        >More info</button>
      </div>
    </li >
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