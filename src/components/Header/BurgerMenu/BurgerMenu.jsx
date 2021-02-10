import React from 'react'
import { connect } from 'react-redux'

import { setNavigationClass } from './../../../store/header/actions'

const BurgerMenu = (props) => {

  const activeNavbar = (e) => {
    const el = e.target.closest('.burger-menu').classList

    if (el.contains('burger-menu_active') === false) {
      el.add('burger-menu_active')
      props.setNavigationClass(true)
    } else {
      el.remove('burger-menu_active')
      props.setNavigationClass(false)
    }

  }

  return (
    <div className="burger-menu" onClick={(e) => activeNavbar(e)}>
      <span className="burger-menu__line"></span>
      <span className="burger-menu__line"></span>
      <span className="burger-menu__line"></span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}

const mapDispatchToProps = {
  setNavigationClass
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu)