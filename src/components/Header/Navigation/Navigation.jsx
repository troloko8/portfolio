import React from 'react'
import { NavigationItem } from './NavigationItem/NavigationItem'

const namesPages = ['About', 'Portfolio', 'Contact']

export const Navigation = () => {

  const navigationList = namesPages.map((el, index) => {
    return <NavigationItem name={el} key={index} />
  })

  return (
    <div className="navigation">
      <ul className="navigation__list">
        {navigationList}
      </ul>
    </div>

  )
}