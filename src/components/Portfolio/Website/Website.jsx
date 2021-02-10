import React from 'react'
import { connect } from 'react-redux'

import { setWebsiteVisible } from './../../../store/website/actions'
import { SkillsList } from './SkillsList/SkillslList'

const Website = (props) => {

  const dynamicSize = {
    first: {
      left: props.webSite.position.x,
      top: props.webSite.position.y,
      width: props.webSite.size.w,
      height: props.webSite.size.h
    },
    second: {
      left: '0%',
      top: '0%'
    }
  }

  const closeWebsitePopup = (e) => {
    if (e.target.classList.contains('website-active') || e.target.closest('.button-close')) {
      props.setWebsiteVisible(false)
    }
  }

  return (
    <div
      className={`website ${props.webSite.websiteStatus === true ? 'website-active' : ''} `}
      onClick={(e) => closeWebsitePopup(e)}
      style={
        !props.webSite.websiteStatus
          ?
          dynamicSize.first
          :
          dynamicSize.second
      }
    >
      <div className="website__container">
        <div className="website__top"
          style={{ backgroundImage: `url('${props.webSite.img}')` }}
        >
          {/* <h3 className="website__title">{props.webSite.name}</h3> */}
          <div className="website__buttons">
            <a
              href={props.webSite.link}
              target="blank"
              className="button_website"

            >Open</a>
          </div>
          <div className="button-close"
            onClick={(e) => closeWebsitePopup(e)}
          >
            <span className="button-close__line"></span>
            <span className="button-close__line"></span>
          </div>
        </div>
        <div className="website__bottom">
          <div className="technologies">
            <h3 className="technologies__title">Technologies :</h3>
            <SkillsList skills={props.webSite.technology} />
          </div>
          {/* <div> */}
          <div className="website__info">
            <h6 className="website__title">Description</h6>
            <p className="website__text">{props.webSite.description}</p>
            <a herf={props.webSite.link} className="website__link"> link</a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
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

export default connect(mapStateProps, mapDispatchToProps)(Website)