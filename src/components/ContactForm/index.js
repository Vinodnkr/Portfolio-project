import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './index.css' // Import your CSS file

function ContactForm() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_m5p749d',
        'template_hn9cbgb',
        form.current,
        '7Y_uL63i4EhgENoqD',
      )
      .then(
        result => {
          console.log(result.text)
          // eslint-disable-next-line no-alert
          alert('Message sent')
          form.current.reset()
        },
        error => {
          console.log(error.text)
        },
      )
  }

  /*
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};   
*/

  return (
    <>

      <div className="contact-form-container">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Enter your Name"
              type="text"
              id="name"
              name="user_name"
              required
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Enter your Email ID"
              type="email"
              id="email"
              name="user_email"
              required
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Enter the message or query"
              id="message"
              name="message"
              required
              className="contact-input"
            />
          </div>
          <input value="Send" type="submit" className="contact-button button" />
        </form>
      </div>
   
    </>
  )
}

export default ContactForm
