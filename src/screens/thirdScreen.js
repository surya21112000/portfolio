
import React from 'react'
import './thirdScreen.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ThirdScreen = () => {
  return (
    <body style={{background:"#ffd2d2" ,}}>
    <div className='main1' >
        <div className='cards' >
            
        <Carousel showThumbs={false} autoPlay useKeyboardArrows showArrows showIndicators showStatus stopOnHover  >
                <div style={{lineHeight:2}}>
                    <h2 style={{color:"#898121"}}>HR PORTAL</h2>
                    <p  className='description' style={{paddingLeft:5,paddingRight:5}} >The HR Portal Application is an online platform that enables organizations to manage their human resource functions in a more efficient and streamlined manner. The application allows HR professionals to manage various HR processes, such as recruitment, performance management, training, and development, in one centralized location.It can also be used by  employees for applying leaves and see their pending allocated leaves.</p>
                    <h3 style={{color:'#89812194'}}>Technology used</h3>
                    <ul  className="bullets">
                      <li>
                        <p>Angular</p>
                      </li>
                      <li>
                        <p>Node js</p>
                      </li>
                      <li>
                      <p>Express js</p></li>
                      <li>
                        <p>Mongo DB</p>
                      </li>
                    </ul>
                </div>
                <div style={{lineHeight:2}}>
                    <h2 style={{color:"#898121"}}>Socio-Connect Platform</h2>
                    <p className='description'  style={{paddingLeft:5,paddingRight:5}}>It is a social networking application that is used in airports. The main theme of this application is to connect with strangers to spend time with them during the waiting time for the flight at the lounge, and we can exchange our currencies through this application.


</p>
                    <h3 style={{color:'#89812194'}}>Technology used</h3>
                    <ul className='bullets'>
                      <li>
                        <p>React Native</p>
                      </li>
                      <li>
                        <p>Node js</p>
                      </li>
                      <li>
                      <p>Express js</p></li>
                      <li>
                        <p>MYSQL</p>
                      </li>
                    </ul>
                </div>

                <div style={{lineHeight:2}}>
                    <h2 style={{color:"#898121"}}>Book Search Application</h2>
                    <p className='description'  style={{paddingLeft:5,paddingRight:5}}>

The Bookstore Application is an e-commerce platform that allows customers to browse and purchase books online. The application will provide a user-friendly interface that enables customers to search for books by title, author, or genre, and view book descriptions, reviews, and ratings.



</p>
                    <h3 style={{color:'#89812194'}}>Technology used</h3>
                    <ul className='bullets'>
                      <li>
                        <p>React js</p>
                      </li>
                      <li>
                        <p>Node js</p>
                      </li>
                      <li>
                      <p>Express js</p></li>
                      <li>
                        <p>MYSQL</p>
                      </li>
                    </ul>
                </div>
            </Carousel>

        </div>
        </div>
        </body>
  )
}

export default ThirdScreen

