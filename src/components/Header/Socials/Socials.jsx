import React from 'react'
import { SocialsItem } from './SocialsItem/SocialsItem'
import fb from './../../../icons/facebook.png'
import instagram from './../../../icons/instagram.png'
import linkedin from './../../../icons/linkedin.png'

const dataOfSocials = [
  {
    link: "https://www.facebook.com/anatolii.tytarenko.921",
    img: fb
  },
  {
    link: "https://www.instagram.com/troloko8",
    img: instagram
  },
  {
    link: "https://www.linkedin.com/in/tytaronkoanatolii/",
    img: linkedin
  },
]

export const Socials = () => {

  const socialsList = dataOfSocials.map((el, index) => {
    return <SocialsItem image={el.img} link={el.link} key={index} />
  })

  return (
    <div className="socials">
      <ul className="socials__list">
        {socialsList}
      </ul>
    </div>

  )
}