import React from 'react'

import { AboutRandomFactsItem } from './AboutRandomFactsItem/AboutRandomFactsItem'
import { data } from './data'

export const AboutRandomFacts = () => {

  const randomFacts = data.map((el, index) => {
    return <AboutRandomFactsItem key={index} text={el} />
  })

  return (
    <div className="about__box randomFacts">
      <h6 className="randomFacts__title">Random facts</h6>
      <ul className="randomFacts__list">
        {randomFacts}
      </ul>
    </div>
  )

}