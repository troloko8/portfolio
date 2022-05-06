import React from 'react'
import { Rocket } from './Rocket/Rocket'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function mapRockets(status) {
  return arr.map((el) => {
    return <Rocket key={el} index={el} animate={status} />
  })
}
export const Rockets = ({ animate }) => {
  const rockets = mapRockets(animate)

  return (
    <div>
      {rockets}
    </div>
  )
}