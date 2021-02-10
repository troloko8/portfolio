import React from 'react'
import { connect } from 'react-redux'

import { setWebsiteVisible } from './../../../store/website/actions'

const Background = (props) => {

  return (
    <div
      className={`background
      ${props.webSite.websiteStatus ? 'background-active' : ''} `}
      onClick={() => { props.setWebsiteVisible(false) }}
    ></div >
  )
}

const mapStateProps = (state) => {
  return {
    webSite: state.webSite
  }
}

const mapDispatchToProps = {
  setWebsiteVisible
}

export default connect(mapStateProps, mapDispatchToProps)(Background)