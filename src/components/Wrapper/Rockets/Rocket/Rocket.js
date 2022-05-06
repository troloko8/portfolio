import React from 'react'

import rocket from './../../../../icons/rocket.png'

export const Rocket = ({ index, animate }) => {

  return <img
    className={`icon icon-rocket rockets ${!animate ? '' : 'rockets-active'}`}
    src={rocket} alt='O_o sry'
    style={{ left: `${index * 10}%`, animationDelay: index / 3 + 's' }}
  />
}