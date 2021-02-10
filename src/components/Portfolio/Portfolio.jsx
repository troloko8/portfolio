import React from 'react'
import Background from './Background/Background'

import { PortfolioList } from './PortfolioList/PortfolioList'
import Website from './Website/Website'

export const Portfolio = (props) => {

  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <PortfolioList />
        <Website />
        <Background />
      </div>
    </div>
  )
}