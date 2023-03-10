import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState ,useRef} from 'react'
import '../screens/nav.css'
import { faCoffee, faFilter,faBars, faCross, faXmark } from '@fortawesome/free-solid-svg-icons'
import AnimatedText from 'react-animated-text-content';
import SecondScreen from './secondScreen';
import FirstScreen from './firstscreen';
import ThirdScreen from './thirdScreen';
import FourthScreen from './fourthScree';
const Nav = () => {
  const [check,setCheck]= useState(true)
  const targetRef = useRef(null);
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
 
  
>
  This is Surya
</AnimatedText>

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
