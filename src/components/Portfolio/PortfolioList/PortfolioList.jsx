import React from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import { store } from './../../../store/store'

export const PortfolioList = (props) => {

  const mapPortItems = store.map((data, index) => {

    if (index === store.length - 1) {
      return <PortfolioItem state={data} key={index} wrongItem={true} animation={{ animateStatus: props.animateStatus, index: index }} />
    }
    return <PortfolioItem state={data} key={index} animation={{ animateStatus: props.animateStatus, index: index }} />
  })

  return (
    <ul className="portfolio__list">
      {mapPortItems}
    </ul>
  )
}