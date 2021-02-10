import React from 'react'

import { data } from './data'
import { MySocialsItem } from './MySocialsItem/MySocialsItem'

export const MySocials = () => {

  const socials = data.map((el, index) => {

    return (
      <MySocialsItem props={el} key={index} />
    )
  })

  return (
    <section className="contacts__section">
      <h2 className="contacts__title">My socials</h2>
      <ul className="contacts__list">
        {socials}
      </ul>
    </section>
  )

}