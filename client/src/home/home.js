import React from 'react';
import NavBar from './navbar/NavBar';
import './home.css'
import homePic1 from './pic2.jpg'
import { Carousel } from 'react-bootstrap';
import MissTakum from '../components/MissTakum';
import About from '../components/About';
import Images from '../components/Images';
import ContactUs from '../components/ContactUs';
import MrTakum from '../components/MrTakum';
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

const Footer = () => {
  return (
    <div className=' footer' >
      <h2 > Vibrant Event Management.</h2>
      <h6>Built,Designed And Maintained By Nnamdi Solomon Iroagba</h6>
      <p>nnamdisolomon1@gmail.com</p>
      <h4>© 2023</h4>
    </div>

  );
}

function HomeBody({ contactRef, learnRef, scrollToTargetDiv }) {
  const navigate = useNavigate()

  return (
    <>
      <div className='home-carousel'>
        <Carousel controls={false}>
          <Carousel.Item>
            <div>
              <img src={homePic1} alt='carouselpicture' />
            </div>
            <Carousel.Caption>
              <h1 style={{ color: 'black' }}>Vibrant Event Management</h1>
              <h6 style={{ color: 'black' }}>Where Beauty Radiates, Elegance Elevates, and Every Moment Sparkles with Grace.</h6>
              <div style={{ alignItems: 'start' }}>
                <button className='button' onClick={() => scrollToTargetDiv(contactRef)}>Contact Us</button>
                <button className='button' onClick={() => scrollToTargetDiv(learnRef)}>Learn More</button>
                <button className='vote-button' onClick={() => navigate('/choosevote')}>Voting Poll</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div>
              <img src={homePic1} alt='carouselpicture' />
            </div>
            <Carousel.Caption>
              <h1>Miss Takum</h1>
              <h6>Beauty,Brains and Elegance...</h6>
              <div style={{ alignItems: 'start' }}>
                <button className='button' onClick={() => scrollToTargetDiv(contactRef)}>Contact Us</button>
                <button className='button' onClick={() => scrollToTargetDiv(learnRef)}>Learn More</button>
                <button className='vote-button' onClick={() => navigate('/choosevote')}>Voting Poll</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img src={homePic1} alt='carouselpicture' />
            </div>
            <Carousel.Caption>
              <h1>Mr. Takum</h1>
              <h6>Charisma and Confidence...</h6>
              <div style={{ alignItems: 'start' }}>
                <button className='button' onClick={() => scrollToTargetDiv(contactRef)}>Contact Us</button>
                <button className='button' onClick={() => scrollToTargetDiv(learnRef)}>Learn More</button>
                <button className='vote-button' onClick={() => navigate('/choosevote')}>Voting Poll</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img src={homePic1} alt='carouselpicture' />
            </div>
            <Carousel.Caption>
              <h1>Vibrant Event Management</h1>
              <h6>Where Beauty Radiates, Elegance Elevates, and Every Moment Sparkles with Grace.</h6>
              <div style={{ alignItems: 'start' }}>
                <button className='button' onClick={() => scrollToTargetDiv(contactRef)}>Contact Us</button>
                <button className='button' onClick={() => scrollToTargetDiv(learnRef)}>Learn More</button>
                <button className='vote-button' onClick={() => navigate('/choosevote')}>Voting Poll</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
    </>
  );
}

const Home = () => {
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const galleryRef = useRef(null)
  const learnRef = useRef(null)
  const scrollToTargetDiv = (targetDivRef) => {
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (<>
    <div>
      <div className='nav-bar'><NavBar galleryRef={galleryRef} contactRef={contactRef} aboutRef={aboutRef} scrollToTargetDiv={scrollToTargetDiv} /></div>
      <div className='body'><HomeBody contactRef={contactRef} learnRef={learnRef} scrollToTargetDiv={scrollToTargetDiv} /></div>
      <div ref={learnRef}><MissTakum />
        <MrTakum /></div>
      <div ref={galleryRef}><Images /></div>
      <div ref={contactRef}><ContactUs /></div>
      <div ref={aboutRef}><About /></div>

      <div><Footer /></div>
    </div>
  </>
  )
}
export default Home

