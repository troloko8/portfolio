import React from 'react'
import { connect } from 'react-redux'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import { Navigation } from './Navigation/Navigation'
import { Socials } from './Socials/Socials'

const Header = (props) => {
  const navStatus = props.header.navStatus === true ? 'header-active' : ''
  return (
    <header className={`header ${navStatus}`}>
      <div className="header__container">
        <Navigation />
        <Socials />
      </div>
      <BurgerMenu />
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}



export default connect(mapStateToProps)(Header) 