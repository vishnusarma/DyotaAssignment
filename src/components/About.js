import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import image2 from '../Assets/vision-mission.gif';
import image3 from '../Assets/goal2.gif';
import Carousel from './Carousel';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.4, duration: 1 } }
  };

  const child1Variants = {
    hidden: { x: -100 },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  const child2Variants = {
    hidden: { x: 100 },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <div className="contain">
      <motion.div
        className="container1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="child1" variants={child1Variants}>
          <img src={image2} alt="img" className="image" />
        </motion.div>
        <motion.div className="child2" variants={child2Variants}>
          <h1>Our Vision & Mission</h1>
          <p>PROTONIX FORTUNER shall at all times strive to achieve 100%<br/> customer delight by Offering products and services with the use of<br/> latest technology, Zero defect manufacturing process with the latest<br/> manufacturing techniques, that provide protection, safety, comfort & peace of<br/> mind. Reliable performance, rugged construction, imaginative engineering &<br/> extensive pre-testing shall be the basic criteria for all products design &<br/> manufacturing. We shall constantly endeavor to upgrade technologies and quality systems to make our products user friendly with latest features and functions.</p>
        </motion.div>
      </motion.div>
      <hr/>
      <motion.div
        className="container2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="child3" variants={child1Variants}>
          <h1>Our Values & Code of Ethics</h1>
          <p>The need for change in the energy industry is coupled by the need<br/> for change in business practices-and social responsibility. That is<br/> why PROTONIX FORTUNER values and code of ethics follow a “Clean<br/> Energy promoted by Clean Business practices” approach. PROTONIX<br/> FORTUNER business customs and processes must promote honesty,<br/> integrity, transparency and loyalty to our partners and society, in the utmost professional and efficient manner</p>
        </motion.div>
        <motion.div className="child4" variants={child2Variants}>
          <img src={image3} alt="img" className="image" />
        </motion.div>
      </motion.div>
      <hr/>
      <Carousel/>
    </div>
  );
};

export default About;
