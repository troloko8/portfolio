import React from 'react'
import { Link } from 'react-router-dom'

export const NavigationItem = (props) => {
  return (
    <li className="navigation__item">
      <Link
        to={props.name}
        className="navigation__link"
      >
        {props.name}
      </Link>
    </li>
  )
}