import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../screens/nav.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import SecondScreen from './secondScreen';
import FirstScreen from './firstscreen';
import ThirdScreen from './thirdScreen';
import FourthScreen from './fourthScree';
const Nav = () => {
  const [check,setCheck]= useState(true)
  
  return (
    <div>
    <div className="nav-wrappers" >
      <ul className="nav-linkss">
        <div className="toggle-button"></div>
        <div className="containers">
          <div className="tops" id='topNav'>
            <li><a  onClick={()=>{
              const targ=(document.getElementById('target'))
              
if(targ){
  targ.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

} }}
>About </a></li>
            <li className="center"><a onClick={()=>{
              const targ=(document.getElementById('second'))
              
if(targ){
  targ.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

} }}
            >
              
              Skills</a></li>
            <li className="upward"><a onClick={()=>{
              const targ=(document.getElementById('third'))
              
if(targ){
  targ.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

} }}
            
            
            >Projects</a></li>
            <li className="forward"><a onClick={()=>{
              const targ=(document.getElementById('fourth'))
              
if(targ){
  targ.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

} }}
            
            >Contact me</a></li>
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

 <p className='animated-text'> This is Surya </p>


    </div>
    <div id="target">
    <SecondScreen /> 
    
    
    </div>
    <div id="second">
    <FirstScreen /> 
    
    
    </div>
    <div id="third">
    <ThirdScreen /> 
    
    
    </div>
    <div id="fourth">
    <FourthScreen /> 
    
    
    </div>
   
    
    
    
    </div>

  )
}

export default Nav
