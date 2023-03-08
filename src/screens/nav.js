import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../screens/nav.css'
import { faCoffee, faFilter,faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'
import AnimatedText from 'react-animated-text-content';
const Nav = () => {
  const [check,setCheck]= useState(true)

  return (
    <div className="nav-wrappers" >
      <ul className="nav-linkss">
        <div className="toggle-button"></div>
        <div className="containers">
          <div className="tops" id='topNav'>
            <li><a href="#">About us</a></li>
            <li className="center"><a href="#">Services</a></li>
            <li className="upward"><a href="#">Resources</a></li>
            <li className="forward"><a href="#">Contact</a></li>
          </div>
          <li>
            <FontAwesomeIcon
              icon={check ? faBars : faXmark}
              size="2x"
              className='barss'
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
      <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="wave"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
  style={{fontSize:85,position:"absolute",bottom:"10%",right:0,left:0,opacity:0.4}}
  
>
  This is Surya
</AnimatedText>
    </div>
  )
}

export default Nav
