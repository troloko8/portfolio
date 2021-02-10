import React from 'react'


export const Form = () => {

  return (
    <section className="contacts__section">
      <form className="contacts__form">
        <div className="contacts__container">
          <h4 className="contacts__title">Send me email</h4>
          <div className="contacts__inputsBox">
            <div className="contacts__box">
              <label className="contacts__label">
                <input
                  className="contacts__input"
                  type='text'
                  name="name"
                  placeholder="Your name:"
                  required
                />
                <span className="contacts__inputText">Your name</span>
              </label>
              <label className="contacts__label">
                <input
                  className="contacts__input"
                  type='email'
                  name="email"
                  placeholder="Your name:"
                  required
                />
                <span className="contacts__inputText">Your email</span>
              </label>
            </div>
            <div className="contacts__box">
              <div className="contacts__messageBox">
                <textarea
                  className="contacts__message contacts__input"
                  name="message"
                  required
                />
                <span className="contacts__inputText">Your message</span>
              </div>
            </div>
          </div>
          <button className="button_website contacts__button">Send email</button>
        </div>
      </form>
    </section >
  )
}