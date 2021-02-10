import React from 'react'

export const MySocialsItem = (props) => {

  return (
    <li className="contacts__item">
      <a
        target="blank"
        href={props.props.link}
        className="contacts__link"
        style={{ backgroundImage: `url("${props.props.img}")` }}
      ></a>
    </li>
  )
}