import React from 'react'

export const SocialsItem = (props) => {

  return (
    <li className="socials__item">
      <a
        href={props.link}
        className="socials__link"
        target="blank"
      >
        <img alt=':-(' src={props.image} className="socials__picture" />
      </a>
    </li>
  )
}