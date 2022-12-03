import React from 'react';
import Typewriter from 'typewriter-effect';
import NavBar from './navbar/navbar';
import './home.css'
import pic2 from './pic2.jpg'

const Footer = () => {
  return (
    <h2 className=' footer text-light text-center bg-dark'>THIS PAGEANTRY IS  BROUGHT TO YOU BY TAKUM ENTERTAINMENT INDUSTRY
      AND  VIBRANT EVENT MANAGEMENT © 2022
    </h2>
  );
  }

function HomeBody() {

  return (
    <>
    <div>
      <img
        className="d-block w-100"
        src={pic2}
        alt="First slide"
      />
      <div className='carous text-light'>
        <h2>
          <Typewriter
            options={{
              strings: ['Takum Pageantry...', 'Redefining The Essence Of Beauty...'],
              autoStart: true,
              loop: true,
              delay: 1
            }}
          />
        </h2>
      </div>
      </div>
    </>
  );
}

const Home = () => {

  return (<>
    <NavBar />
    <HomeBody />
    <Footer />
  </>
  )
}
export default Home

