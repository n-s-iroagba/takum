import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typewriter from 'typewriter-effect';
import NavBar from './navbar/navbar';
import './home.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'

 const Footer = () => {
  return (
    <h2 className=' footer text-light text-center bg-dark'>THIS PAGEANTRY IS  BROUGHT TO YOU BY TAKUM ENTERTAINMENT INDUSTRY 
      AND  VIBRANT EVENT MANAGEMENT © 2022
      </h2>
  );
};


function HomeBody() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption className='carouselc'>
        <h2>
          <Typewriter
          options={{
          strings: ['Takum Pageantry...', 'Redefining The Essence Of Beauty...'],
          autoStart: true,
           loop: true,
           delay:1
          }}
        />
        </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption className='carouselc'>
        <h2>
          <Typewriter
          options={{
          strings: ['Takum Pageantry...', 'Redefining The Essence Of Beauty...'],
          autoStart: true,
           loop: true,
           delay : 2
          }}
        />
        </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Home = ()=>{

  return(<>
    <NavBar/>
    <HomeBody/>
    <Footer/>
  </>
  )
}
export default Home

