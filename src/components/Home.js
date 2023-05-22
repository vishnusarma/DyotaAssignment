import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import giphy from '../Assets/Procrastination.gif';
import { motion } from 'framer-motion';

const Home = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const headingVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <motion.h1
            variants={headingVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Securing your future in the digital world
          </motion.h1>
          <br />
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <FontAwesomeIcon icon={faHandPointRight} /> Protecting Personal and Financial Information
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faHandPointRight} /> Safeguarding Digital Assets
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <FontAwesomeIcon icon={faHandPointRight} /> Mitigating Cyber Threats
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <FontAwesomeIcon icon={faHandPointRight} /> Building Online Reputation and Trust
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <FontAwesomeIcon icon={faHandPointRight} /> Embracing Lifelong Learning and Skill Development
          </motion.p>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <FontAwesomeIcon icon={faHandPointRight} /> Implementing Advanced Encryption Techniques
          </motion.p>
        </div>
        <div className="image">
          <motion.img
            src={giphy}
            alt="img"
            className="img"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
