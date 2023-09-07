import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import heroImg from "../assets/images/herodev1.jpg";
import heroImg02 from "../assets/images/herodev2.jpg";
import heroVideo from "../assets/images/herodev3.jpg";
// import experienceImg from "../assets/images/experience.png"

import worldImg from "../assets/images/world.png";
import Subtitle from '../components/Subtitle';
// import SearchBar from '../shared/SearchBar';





const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>
              Turning Code into Creative Digital {" "}
                <span className='highlight'>Experiences.</span>
              </h1>
              <p>Weknow Technologies is a premium Software Development Company, focused on delivering customized software according to specific requirements of every industry and developing new products. We are full of passionate developers who love their craft. We have developed customized softwares for many business organizations in many different Industries. Weknow Technologies offers a wide spectrum of services including Website Design, Software Development, Search Engine Optimization .</p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_ImgBox">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_ImgBox mt-4">
              <img src={heroVideo} alt='' />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero_ImgBox mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>

          
        </Row>
      </Container>
    </section>



    
    </>
  )
}

export default Home