import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { Footer } from '../Footer/Footer'
import Form from './Form/Form'
import PopUpWindow from './Form/PopUpWindow/PopUpWindow'
import { MySocials } from './MySocials/MySocials'
import { toggleHeaderAnimation } from './../../store/header/actions'

const pageLoadingStatus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(document.readyState === 'complete')
    }, 1000);
  })
}

const waitingPage = async (state) => {
  if (await pageLoadingStatus()) {
    return state(true)
  } else {
    return await waitingPage(state)
  }
}

const Contacts = (props) => {

  const contacts = useRef(null)
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [animateStatus, setAnimateStatus] = useState(false)

  useEffect(() => {
    waitingPage(setLoadingStatus)
  }, [])

  useEffect(() => {
    if (loadingStatus && props.path.pathname === '/Contacts') {
      setAnimateStatus(true)
    }
  }, [loadingStatus])

  return (
    <CSSTransition
      in={animateStatus}
      timeout={1000}
      classNames="contacts"
      nodeRef={contacts}
      onEnter={() => props.toggleHeaderAnimation(true)}
    >
      <div className="contacts " ref={contacts}>
        <MySocials animateStatus={animateStatus} />
        <Form />
        <PopUpWindow />
        <Footer />
      </div>
    </CSSTransition>

  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  toggleHeaderAnimation,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)