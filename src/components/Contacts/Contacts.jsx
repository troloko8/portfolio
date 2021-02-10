import React from 'react'
import { Form } from './Form/Form'
import { MySocials } from './MySocials/MySocials'

// СДЕЛАЙ ПРОВЕРКУ ПОЛЕЙ 
// ПЛАВНЫЙ ПЛЕЙСХОЛДЕР
export const Contacts = () => {
  return (
    <div className="contacts">
      <MySocials />
      <Form />
    </div>
  )
}