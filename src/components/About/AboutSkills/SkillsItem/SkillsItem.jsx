import React from 'react'


export const SkillsItem = (props) => {
  const score = props.score
  const randomNum = Math.random()
  const colorValue = `hsl(${randomNum * score}, ${score * 0.8}%, ${60}%)`

  return (
    <li className={`skills__item ${score > 50 ? 'more50' : ''}`}>
      <span className="skills__score">
        {props.skill}
      </span>
      <div className="skills__circle">
        <div
          class="skills__left half-circle"
          style={{
            transform: `rotate(${score * 3.6}deg)`,
            borderColor: colorValue
          }}
        >
        </div>
        <div
          class="skills__right half-circle"
          style={{
            borderColor: colorValue
          }}
        ></div>
      </div>
    </li>
  )
}