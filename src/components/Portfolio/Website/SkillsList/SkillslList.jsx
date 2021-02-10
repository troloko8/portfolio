import React from 'react'
import { SkilItem } from './SkillItem/SkillItem'


export const SkillsList = (props) => {

  const skills = props.skills.map((el, index) => {
    return (
      <SkilItem skill={el} key={index} />
    )
  })

  return (
    <ul className="technologies__list">
      {skills}
    </ul>
  )
}