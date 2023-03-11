
import React,{useEffect, useState} from 'react'
import '../screens/firstscreen.css'


import ProgressBar from "@ramonak/react-progress-bar";
import 'aos/dist/aos.css'
export default function FirstScreen() {

  


  



  return (
    <body style={{background:"#fcde7c"}}> 
   <div style={{marginTop:"0%" ,zIndex:0 ,}}  >
<div className='nav'>
<div className="reactjs"  data-aos="zoom-in"    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
<img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' style={{height:"75%"}} alt="react"></img>
              <p>React</p>
</div>
<div className="angularIcon" data-aos="zoom-in"  data-aos-delay="700"  data-aos-duration="1000"
    data-aos-easing="ease-in-out">
<img alt="angular" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png' style={{height:"75%"}}></img>
              <p>Angular</p>
</div>
<div className="nodejsIcon" data-aos="zoom-in"  data-aos-delay="400"    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
<img alt="nodejs" src='https://i.ibb.co/fCnQPGQ/png-transparent-js-logo-node-logos-and-brands-icon-removebg.png' style={{height:"75%"}}></img>
              <p>Node js</p>
</div>
<div className="mongoIcon" data-aos="zoom-in"  data-aos-delay="200"   data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
<img alt="mondodb"src='https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png' style={{height:"75%"}}></img>
              <p>Mongo DB</p>
</div>
<div className="mysqlIcon" data-aos="zoom-in"  data-aos-delay="600"    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
<img alt="mysql" src='https://cdn-icons-png.flaticon.com/512/4299/4299956.png' style={{height:"35%"}}></img>
              <p>MYSQL</p>
</div>
<div className="rnIcons" data-aos="zoom-in"  data-aos-delay="500"   data-aos-duration="1000"
    data-aos-easing="ease-in-out">
<img alt="react-native" src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' style={{height:"65%"}}></img>

              <p>ReactNative</p>
</div>
<div className="skillsets" 
    >
      <table cellSpacing={13} style={{position:"relative",marginLeft:35}} >
        <tr>
         <td> <p>React</p></td>
         <td><ProgressBar completed={80}  width="200%" /></td>
        </tr>
        <tr>
         <td> <p>Angular</p></td>
         <td><ProgressBar completed={75}  width="200%"height='20px'  /></td>
        </tr>
        <tr>
         <td> <p>ReactNative</p></td>
         <td><ProgressBar completed={85}  width="200%" /></td>
        </tr>
        <tr>
         <td> <p>Node js</p></td>
         <td><ProgressBar completed={70}  width="200%" /></td>
        </tr>
        <tr>
         <td> <p>MongoDB</p></td>
         <td><ProgressBar completed={75}  width="200%" /></td>
        </tr>
        <tr>
         <td> <p>MySQL</p></td>
         <td><ProgressBar completed={80}  width="200%" /></td>
        </tr>
     
    
      </table>
</div>
</div>
{/* <div   style={{width:"20%"}}>
 
<ProgressBar completed={60} initCompletedOnAnimation width='60%' /></div> */}
</div>

</body>

  )
}

