import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import BurgerMenu from './BurgerMenu/BurgerMenu'
import { Navigation } from './Navigation/Navigation'
import { Socials } from './Socials/Socials'

const Header = (props) => {

  // const navStatus = props.header.navStatus === true ? 'header-active' : ''

  return (
    <CSSTransition
      in={props.header.animationStatus}
      timeout={1000}
      classNames="header"
      mountOnEnter
    // unmountOnExit
    >
      <header className="header">
        <div className={`header__container ${props.header.navStatus === true ? 'header__container-active' : ''}`}>
          <Navigation />
          <Socials />
        </div>
        <BurgerMenu />
      </header>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}

export default connect(mapStateToProps)(Header) 