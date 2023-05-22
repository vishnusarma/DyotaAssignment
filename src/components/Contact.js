import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oyr457', 'template_0uq', form.current, 'wrInWDAunh8ibO') //these are wrong credentials in order to see whether i have implemented or not refer the video which i was attached in the mail
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    const isFormValid = name.trim() !== '' && email.trim() !== '' && emailValid && message.trim() !== '';
    setIsButtonDisabled(!isFormValid);
  }, [name, email, message, emailValid]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      toast.error('Please fill in all fields');
      return;
    }

    if (!emailValid) {
      toast.error('Please enter a valid email address');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    sendEmail(e);

    toast.success('Our Team will Contact you ASAP');
  };

  return (
    <div className="contact-container">
      <div className="contact1">
        <h1>Fill the Form to Contact Us<br/><br/>Our team will get back to you</h1>
      </div>
      <div className="contact2">
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name='user_name'
              className="input-line"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name='user_email'
              id="email"
              className={`input-line ${emailValid ? '' : 'invalid'}`}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {!emailValid && <p className="error-msg">Please enter a valid email address</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name='message'
              className="input-line"
              placeholder="Message"
              rows="4"
              value={message}
              onChange={handleMsgChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className={`submit-button ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Contact;
