import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Route, HashRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

import Header from '../Header/Header'
import Portfolio from './../Portfolio/Portfolio';
import About from './../About/About';
import Contacts from './../Contacts/Contacts';
import { setScrollValue } from './../../store/wrapper/action'
import { toggleHeaderAnimation } from './../../store/header/actions'
import { setNavigationClass } from './../../store/header/actions'

const routes = [
  { path: '/Portfolio', name: 'Portfolio', Component: Portfolio, className: 'portfolio-screen' },
  { path: '/About', name: 'About', Component: About, className: 'about-screen' },
  { path: '/Contacts', name: 'Contacts', Component: Contacts, className: 'contacts-screen' },
]

const Wrapper = (props) => {
  const About = useRef(null)
  const Portfolio = useRef(null)
  const Contacts = useRef(null)

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    props.setScrollValue(scroll)
  }, [scroll])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <HashRouter>
      <div className="wrapper">
        <Header />
        {routes.map(({ path, name, Component, className }) => (
          <Route key={path} exact path={path}>
            {({ match, location }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames={className}
                unmountOnExit
                nodeRef={eval(name)}
                onExit={() => {
                  props.toggleHeaderAnimation((false))
                  props.setNavigationClass(false)
                }}
              >
                <div className={className} ref={eval(name)}>

                  <Component path={location} />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </HashRouter >
  )
}

const mapStateToProps = (state) => {
  return {
    header: state.header
  }
}

const mapDispatchToProps = {
  setScrollValue,
  toggleHeaderAnimation,
  setNavigationClass
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper) 