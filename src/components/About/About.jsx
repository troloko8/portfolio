import React from 'react'
import { AboutMain } from './AboutMain/AboutMain'
import { AboutRandomFacts } from './AboutRandomFacts/AboutRandomFacts'
import { AboutSkills } from './AboutSkills/AboutSkills'
import me from './../../img/Me.png'

export const About = () => {

  //СДЕЛАЙ АНИМАЦИЮ ШКАЛЫ ПРОЦЕНТОВ В СКИЛАХ, ПЕРМЕНЫ ЦВЕТА В БОРДЕР И СМЕНУ ЦИФРЫ В О ВРЕМЯ АНИМАЦИИ

  return (
    <div className="about">
      <section className="about__container">
        <AboutMain />
        <div className="about__box">
          <img src={me} className="me-img" />
        </div>
      </section>
      <section className="about__container">
        <div className="about__box grot-img"></div>
        <AboutRandomFacts />
      </section>
      <section className="about__container skills">
        <h3 className="skills__title">My skills</h3>
        <AboutSkills />
      </section>
    </div>
  )
}