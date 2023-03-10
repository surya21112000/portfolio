
import React from 'react'
import '../screens/secondScreen.css'
import { TypeAnimation } from 'react-type-animation';
import 'aos/dist/aos.css'
const SecondScreen = () => {
  return (
    <body>
      
  <div className='navs'>
    <div dat-aos="zoom-in" >
       <TypeAnimation
      sequence={[
      "Greetings, fellow humans! I'm a software developer by day and a superhero by night (well, at least in my dreams). I love building cool stuff with code, especially using MEAN and MERN stacks. When I'm not saving the world, you can find me swimming, playing video games, or exploring new restaurants (because food is life). I'm a firm believer in the power of clean code, open communication, and endless cups of coffee. "
     // Waits 1
,
    ,
     
     
      ]}
      
      wrapper="div"
      cursor={true}
      omitDeletionAnimation
       className='typewriter'
     
    /></div>
  </div></body>
  )
}

export default SecondScreen

