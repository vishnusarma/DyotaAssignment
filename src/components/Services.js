import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';
import cyber from '../Assets/services.png';
import { BsArrowUpRight } from 'react-icons/bs';

const Services = () => {
  const ser1Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.5 } }
  };

  const ser2Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { delay: 0.5 } }
  };

  return (
    <div className="main">
      <motion.div className="ser1" variants={ser1Variants} initial="hidden" animate="visible">
        <h1>What do we Offer?</h1>
        <div className='image-container'>
          <img src={cyber} alt="img" className='service-img' />
        </div>
      </motion.div>
      <motion.div className="ser2" variants={ser2Variants} initial="hidden" animate="visible">
        <div className="sub1">
          <h2>Penetration Testing</h2>
          <br />
          <span className="content">We offer a wide Range of Variety Services including Android Application Pentesting, Web Application Pentesting and Network Pentesting and we provide 24/7 support to our customers. also we provide Contract basis and Full-time basis services also</span>
          <div className="btn-container">
            <button className="btn">
              <a href="https://google.com" className="btn-link"><BsArrowUpRight /></a>
            </button>
          </div>
        </div>
        <div className="sub2">
          <h2>Encryption Services</h2>
          <br />
          <span className="content">We provide Encryption Services to our customers with secure protocols to prevent data loss or data leakage and also we follow ISO27001 Security standards to fulfill our customers requirements</span>
          <div className="btn-container">
            <button className="btn">
              <a href="https://google.com" className="btn-link"><BsArrowUpRight /></a>
            </button>
          </div>
        </div>
        <div className="sub3">
          <h2>Detection Systems</h2>
          <br />
          <span className="content">We will provide a strong Detection systems to our customers in order to detect in case of any BAD Traffic and our detections are customized and specially designed by Professionals</span>
          <div className="btn-container">
            <button className="btn">
              <a href="https://google.com" className="btn-link"><BsArrowUpRight /></a>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
