import React from 'react'


export const Score = ({ score, animate }) => {
  let counter = Math.floor(score)

  return (
    <div className={`score ${!animate ? '' : 'hidden'}`} >
      {counter} / 5000
    </div>
  )
}