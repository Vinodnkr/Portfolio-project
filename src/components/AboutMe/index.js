
import './index.css'

function AboutMe() {
  return (
    <div>
     

      <div className="about-container" id="aboutSection">
        <h1 className="about-me-text">About Me</h1>
        <div className="d-flex flex-row justify-content-center">
          <div className="about-img-container">
            <img
              className="about-img ml-lg-4"
              src="https://res.cloudinary.com/dyixrm8rs/image/upload/v1696877174/Screenshot_from_2023-09-30_21-53-40_ynuytt.png"
              alt="My"
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div className="education-card ">
              <i className="fa-solid fa-award fa-2xl award-icon" />
              <h1 className="education-heading">Education</h1>
              <p className="education-text">
                BE (Mechanical)
                <br />
                <span style={{fontSize: '14px'}}>
                  Passed Out Year{' '}
                  <span
                    style={{
                      color: 'chocolate',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    2014
                  </span>
                </span>
                <br />
                <span style={{fontSize: '14px'}}>
                  Percentage{' '}
                  <span
                    style={{
                      color: 'chocolate',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    75%
                  </span>
                </span>
              </p>
              <p className="education-text" />
            </div>
            <div className="about-nxtwave">
              <h1 className="about-mern">
                <span style={{color: 'chocolate'}}>MERN</span> Full Stack
                Development{' '}
                <span style={{color: 'chocolate', fontStyle: 'oblique'}}>
                  Trainee
                </span>
              </h1>
              <p className="about-mern-description">
                At NxtWave’s CCBP 4.0 Intensive, I’m currently learning
                Fullstack development with a specialization in 4.0 technologies.
                In love with the coding challenges and hands-on projects. With
                Industry’s first ever IRC 4.0, getting ready to take on new
                challenges in the tech world.
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default AboutMe
