
import React,{useState} from 'react'
import '../screens/firstscreen.css'
import Lottie from 'react-lottie'
import * as animation from '../screens/react.json'
import * as angularAnimation from '../screens/angular.json'
import * as nodeJSAnimation from '../screens/nodejs.json'
import * as mongoAnimation from '../screens/mongodb.json'
import * as mysqlAnimation from '../screens/mySQl.json'
import * as reactNativeAnimation from '../screens/reactNative.json'

import 'aos/dist/aos.css'
export default function FirstScreen() {

const [check,setCheck]= useState(false)
  const defaultOptions = {
    loop: false,
    
    autoplay: true, 
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const Angular = {
    loop: false,
    
    autoplay: true, 
    animationData: angularAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const Nodejs = {
    loop: false,
    
    autoplay: true, 
    animationData: nodeJSAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const mongo = {
    loop: false,
    
    autoplay: true, 
    animationData: mongoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const mySql = {
    loop: false,
    
    autoplay: true, 
    animationData: mysqlAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const ReactNative = {
    loop: false,
    
    autoplay: true, 
    animationData: reactNativeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }



  return (
   <div style={{marginTop:"0%" ,zIndex:0 ,}}  >
<div className='nav'>
<div className="img"  data-aos="zoom-in"    data-aos-duration="1000"
    data-aos-easing="ease-in-out" onMouseEnter={()=>{
  setCheck(true)
}} style={{height:170,width:170,backgroundColor:"#ffd2d2",borderWidth:7,borderRadius:100,borderColor:"white",borderStyle:"solid",display:"flex",alignItems:"center" ,flexDirection:"column",margin:"5%",position:"absolute",marginLeft:"20%"}}>
<Lottie options={defaultOptions}
              height={100}
              width={100}
      
            
              />
              <p>React</p>
</div>
<div className="img" data-aos="zoom-in"  data-aos-delay="700"  data-aos-duration="1000"
    data-aos-easing="ease-in-out" style={{height:170,width:170,marginLeft:"25%",backgroundColor:"#ffd2d2",borderWidth:7,borderRadius:100,borderColor:"white",borderStyle:"solid",display:"flex",alignItems:"center" ,flexDirection:"column",margin:"35%",position:"absolute"}}>
<Lottie options={Angular}
              height={100}
              width={100}
              
              
              />
              <p>Angular</p>
</div>
<div className="img" data-aos="zoom-in"  data-aos-delay="400"    data-aos-duration="1000"
    data-aos-easing="ease-in-out" style={{height:170,width:170,backgroundColor:"#ffd2d2",borderWidth:7,borderRadius:100,borderColor:"white",borderStyle:"solid",display:"flex",alignItems:"center" ,flexDirection:"column",margin:"20%",position:"absolute",marginLeft:"80%"}}>
<Lottie options={Nodejs}
              height={100}
              width={100}
              
              
              />
              <p>Node js</p>
</div>
<div className="img" data-aos="zoom-in"  data-aos-delay="200"   data-aos-duration="1000"
    data-aos-easing="ease-in-out" style={{height:150,width:150,backgroundColor:"#ffd2d2",borderWidth:7,borderRadius:100,borderColor:"white",borderStyle:"solid",display:"flex",alignItems:"center" ,flexDirection:"column",position:"absolute",marginLeft:"65%",marginTop:"3%"}}>
<Lottie options={mongo}
              height={75}
              width={75}
              
              
              />
              <p>Mongo DB</p>
</div>
<div className="img" data-aos="zoom-in"  data-aos-delay="600"    data-aos-duration="1000"
    data-aos-easing="ease-in-out" style={{height:120,width:120,backgroundColor:"#ffd2d2",borderWidth:7,borderRadius:100,borderColor:"white",borderStyle:"solid",display:"flex",alignItems:"center" ,flexDirection:"column",margin:"20%",position:"absolute",marginLeft:"60%",marginTop:"30%"}}>
<Lottie options={mySql}
              height={60}
              width={60}
              
              
              />
              <p>MYSQL</p>
</div>
<div className="img" data-aos="zoom-in"  data-aos-delay="500"   data-aos-duration="1000"
    data-aos-easing="ease-in-out" style={{height:140,width:140,backgroundColor:"#ffd2d2",borderWidth:7,borderRadius:100,borderColor:"white",borderStyle:"solid",display:"flex",alignItems:"center" ,flexDirection:"column",margin:"20%",position:"absolute",marginLeft:"6%",marginTop:"28%"}}>
<Lottie options={defaultOptions}
              height={70}
              width={70}
              
              
              />
              <p>React Native</p>
</div>
 
 
</div>


   </div>
  )
}

