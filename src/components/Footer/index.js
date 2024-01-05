import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle
} from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';

import './index.css';

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div>
      <div className="mob contact-section" id="contactSection">
        <div className="mob contact-container">
          <div className="col-3 col-md-2 col-lg-1 order-md-0">
            <img
              src="https://res.cloudinary.com/dyixrm8rs/image/upload/v1696877135/passport_photo_vinod_muzjxp.jpg"
              className="contact-img"
              width="65"
              height="65"
              alt="profilePic"
            />
          </div>

          <div className="col-9 col-md-3 col-lg-auto order-md-1">
            <div className="ml-2">
              <h4>Vinod Kumar</h4>
              <p>MERN stack Developer</p>
            </div>
          </div>

          <div className="mob col-1 col-md-3 col-lg-auto order-md-2">
            <div className="">
              <h4>Phone No.</h4>
              <p>
                <FaPhone className="fa-icon pr-2" />
                <a href="tel:+919444344276">+91-9444344276</a>
              </p>
            </div>
          </div>

          <div className="col-1 col-md-4 col-lg-auto order-md-3">
            <div className="">
              <h4>E-mail</h4>
              <p>
                <FaEnvelope className="fa-icon pr-2" />
                <a href="mailto:vinodtgv@gmail.com">vinodtgv@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="col-1 col-md-6 col-lg-auto order-md-5">
            <div className="contact-social-media-icons ml-3">
              <a
                href="https://www.linkedin.com/in/vinodtgv/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin className="fa-icon fa1" />
              </a>
              <a
                href="https://github.com/Vinodnkr"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub className="fa-icon fa1" />
              </a>
              <a
                href="mailto:vinodtgv@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <AiOutlineMail className="fa-icon fa1" />
              </a>

              <a
                href="tel:+919444344276"
                target="_blank"
                rel="noreferrer"
                aria-label="Phone Call"
              >
                <BiPhoneCall className="fa-icon fa1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-container pt-4">
        <div className="d-flex flex-column justify-content-center text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="pt-2">
                  <AiOutlineCopyrightCircle className="fa-icon pr-2" />
                  {year} by Vinod Kumar, All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
