import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

import Header from '../Header'
import Footer from '../Footer'
import Project from '../Project'
import AboutMe from '../AboutMe'
import ContactForm from '../ContactForm'
import './index.css'

function Home() {
  return (
    <div>
      <Header />
      <div className="home-container" id="homeSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 order-md-2">
              <img
                src="https://res.cloudinary.com/dyixrm8rs/image/upload/v1696885534/DSC_7228-removebg_bjibor.jpg"
                className="image ml-lg-4"
                alt="Background"
              />
            </div>
            <div className="col-12 col-md-7 order-md-1 d-flex flex-column justify-content-center">
              <h4 className="h4-text">Hello, I am</h4>
              <h1 className="h1-text">
                <span className="ticktok-letter">V</span>inod
                <span className="ticktok-letter"> K</span>umar
              </h1>
              <h3 className="h3-text">I&apos;m a MERN stack Developer</h3>

              <div className="home-buttons">
                <a
                  href="/projects"
                  className="btn-font"
                >
                  Projects
                </a>
                <a
                  className="btn-font"
                  href="https://www.linkedin.com/in/vinodtgv/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </div>
              <div className="social-media-icons">
                <a href="https://www.linkedin.com/in/vinodtgv/" target="blank">
                  <AiFillLinkedin className="fa-icon fa1" />
                </a>
                <a href="https://github.com/Vinodnkr" target="blank">
                  <AiFillGithub className="fa-icon fa1" />
                </a>
                <a
                  href="mailto:vinodtgv@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail className="fa-icon fa1" />
                </a>

                <a href="tel:+919444344276" target="_blank" rel="noreferrer">
                  <BiPhoneCall className="fa-icon fa1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
    
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
