import React from 'react'
import { connect } from 'react-redux'

import { data } from './data'
import { togglePopup } from './../../../../store/contacts/action'

// СДЕЛАЙ РЕДАКС И АКТИВ НА ФОРМУ И ПОПАП

const PopUpWindow = (props) => {
  const index = props.contacts.popupScreenplay

  const closePopup = (e) => {
    if (e.target.classList.contains('popup')) {
      props.togglePopup(false, index)
    }
  }

  return (
    <div
      className={`popup ${props.contacts.popupStatus === true ? 'popup-active' : ''}`}
      onClick={closePopup}
    >
      <div className="popup__container" >
        <div
          className="popup__top"
          style={{
            backgroundColor: data[index].color,
            backgroundImage: `url(${data[index].img})`
          }}
        ></div>
        <div className="popup__bottom">
          <p className="popup__text">{data[index].text}</p>
          <button className="popup__btn" onClick={() => props.togglePopup(false, index)}>
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = {
  togglePopup
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUpWindow)
