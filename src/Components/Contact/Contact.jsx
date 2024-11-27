import React, { useRef } from 'react'
import './contact.css'
import gitIcon from '../../assets/githublogo.png'
import linkedinIcon from '../../assets/Logo-LinkedIn-Round.png'
import InstagramIcon from '../../assets/new-Instagram-logo.png'
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ukuwcoc', 'template_kbv3b0c', form.current, {
        publicKey: 'iS9yNSRBSYoH8CSDy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <span className="contactDesc"> Please fill out the form below to discuss any work opportunities </span>
        <form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' className="name" name='your_name' />
            <input type="email" placeholder='Your Email' className="email" name='your_email' />
            <textarea name="message" rows={'5'} placeholder='Your Message' className='msg' id=""></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
               <a href="https://github.com/midhunmohan2003"> <img src={gitIcon} alt="fb" className="link" /> </a> 
               <a href="https://www.linkedin.com/in/midhun-mohan-53a65a253/"> <img src={linkedinIcon} alt="twitter" className="link" /></a>
               <a href="https://www.instagram.com/"><img src={InstagramIcon} alt="instagram" className="link" /> </a> 

            </div>
        </form>
      </div>
    </>
  )
}

export default Contact
