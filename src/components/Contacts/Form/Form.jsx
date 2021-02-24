import React, { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import emailjs from 'emailjs-com';
import { CSSTransition } from 'react-transition-group';

import { togglePopup } from './../../../store/contacts/action'

const Form = (props) => {
  const [scrollValue, setScrollValue] = useState(0)
  const form = useRef(null)

  useEffect(() => {
    setScrollValue(form.current.getBoundingClientRect().top - window.innerHeight / 2)
  }, [])

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_m033xgj', 'template_opt0nlk', e.target, 'user_pCBur5grudtXsPM0DlbaA')
      .then((result) => {
        props.togglePopup(true, 0)
      }, (error) => {
        props.togglePopup(true, 1)
        console.log(error)
      });
    e.target.reset()
  }

  return (
    <CSSTransition
      in={scrollValue <= props.wrapper.scrollValue}
      timeout={1000}
      classNames="form"
      nodeRef={form}
    >
      <section className="contacts__section form" ref={form}>
        <form
          className="contacts__form"
          method="post"
          onSubmit={sendEmail}
        >
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
            <button
              className="button_website contacts__button"
            >Send email</button>
          </div>
        </form>
      </section >
    </CSSTransition>
  )
}

const mapToStateProps = (state) => {
  return {
    wrapper: state.wrapper
  }
}

const mapToDispatchProps = {
  togglePopup
}

export default connect(mapToStateProps, mapToDispatchProps)(Form)