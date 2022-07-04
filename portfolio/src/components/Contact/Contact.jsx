import {MdOutlineAttachEmail,} from 'react-icons/md';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ll1lg2l', 'template_l3mnnpl', form.current, 'XjzG5bNYwaipJITXA')
      
    e.target.reset();
  };



  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-conainer">
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineAttachEmail className='contact_option-icons'/>
            <h4>Email</h4>
            <h5>alexander.teklu@hyperisland.se</h5>
            <a href="mailto:alexanderosteklu@hyperisand.se" target={'/'}> Send a message</a>
          </article>
          <article className='contact-option'>
            <MdOutlineAttachEmail className='contact_option-icons'/>
            <h4>email</h4>
            <h5>alexanderosteklu@gmail.com</h5>
            <a href="mailto: alexanderosteklu@gmail.com" target={'/'}> Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" 
                 name='name'
                 placeholder='Your Name' required/>
                 <input type="email" 
                 name='email'
                 placeholder='Your Email' required/>
                 <textarea name="message" rows="7" placeholder='your message' required></textarea>
                 <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;