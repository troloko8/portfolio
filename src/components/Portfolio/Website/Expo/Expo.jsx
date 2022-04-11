import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import app_store from './../../../../icons/app_store.png'
import play_market from './../../../../icons/play_market.png'
import { setPopupStatus } from './../../../../store/website/actions'

const Expo = (props) => {

  const expo = useRef(null)

  const closeExpo = (e) => {
    if (e.target.classList.contains('expo')) {
      props.setPopupStatus(false)
    }
  }

  return (
    <CSSTransition
      in={props.website.expoPopupStatus}
      classNames="expo"
      nodeRef={expo}
      timeout={1000}
    >
      <div className="expo"
        ref={expo}
        onClick={closeExpo}
      >
        <div className="expo__container">
          <p className="expo__text">
            If you want to try this app you need install expo app in phone, and open that in it
           </p>
          <div className="expo__links">
            <a target="blink" href="https://play.google.com/store/apps/details?id=host.exp.exponent" className="expo__link">
              <img alt="here must be icon..." src={play_market} className="expo__icon" />
            </a>
            <a target="blink" href="https://apps.apple.com/us/app/expo-go/id982107779" className="expo__link">
              <img alt="here must be icon..." src={app_store} className="expo__icon" />
            </a>
          </div>
          <button className="popup__btn" onClick={() => props.setPopupStatus(false)} ></button>
        </div>
      </div>
    </CSSTransition >
  )
}

const mapStateToProps = (state) => {
  return {
    website: state.webSite
  }
}

const mapDispatchToProps = {
  setPopupStatus
}
export default connect(mapStateToProps, mapDispatchToProps)(Expo)