import React from 'react'

import { data } from '../aboutData'
import SkillsItem from './SkillsItem/SkillsItem'

export const AboutSkills = () => {

  const skillsItems = data.map((el, index) => {
    return <SkillsItem key={index} skill={el.skill} score={el.score} />
  })

  return (
    <section className="about__container skills">
      <h3 className="skills__title">My skills</h3>
      <ul className="skills__list">
        {skillsItems}
      </ul>
    </section>

  )

} 