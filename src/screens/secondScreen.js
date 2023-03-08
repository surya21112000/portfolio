
import React from 'react'
import '../screens/secondScreen.css'
import { TypeAnimation } from 'react-type-animation';
const SecondScreen = () => {
  return (
    <body>
  <div className='navs'>
    <div  style={{width:"60%",marginLeft:"3%",display:"flex"}}>
       <TypeAnimation
      sequence={[
      "Greetings, fellow humans! I'm a software developer by day and a superhero by night (well, at least in my dreams). I love building cool stuff with code, especially using MEAN and MERN stacks. When I'm not saving the world (or trying to), you can find me swimming, playing video games, or exploring new restaurants (because food is life). I'm a firm believer in the power of clean code, open communication, and endless cups of coffee. "
     // Waits 1
,
    ,
     
     
      ]}
      wrapper="div"
      cursor={true}
      omitDeletionAnimation
      
      style={{ fontSize: '20px',position:"absolute",marginLeft:"40%",marginTop:"5%",width:"50%",color:"#898121" }}
    /></div>
  </div></body>
  )
}

export default SecondScreen

