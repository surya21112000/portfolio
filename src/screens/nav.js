import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../screens/nav.css'
import { faCoffee, faFilter,faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [check,setCheck]= useState(true)

  return (
    <div className="nav-wrapper" >
      <ul className="nav-links">
        <div className="toggle-button"></div>
        <div className="container">
          <div className="top" id='topNav'>
            <li><a href="#">About us</a></li>
            <li className="center"><a href="#">Services</a></li>
            <li className="upward"><a href="#">Resources</a></li>
            <li className="forward"><a href="#">Contact</a></li>
          </div>
          <li>
            <FontAwesomeIcon
              icon={check ? faBars : faXmark}
              size="2x"
              className='bars'
              onClick={() => {
                setCheck(!check)

                if (check === true) {
                  document.getElementById('topNav').className = 'responsive'
                } else {
                  document.getElementById('topNav').className = 'top'
                }
              }}
            />
          </li>
        </div>
      </ul>
    </div>
  )
}

export default Nav
