import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  // ================ EMAILJS ================

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ksc4s0g', 'template_1gg7hk9', form.current, '13Z51yHvmhdVwNyB_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();



  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Reach Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>            
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target="_blank" >Send A Message</a>

          </article>

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>            
            <h5>alpha37</h5>
            <a href="https://m.me/dummy" target="_blank" >Send A Message</a>

          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>            
            <h5>+92 000 000 000</h5>
            <a href="https://api.whatsapp.com/send?phone=+92000000000" target="_blank" >Send A Message</a>

          </article>
        </div>
        {/* ================ END OF CONTACT OPTIONS ================ */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact
