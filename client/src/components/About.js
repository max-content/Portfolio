import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Squares from './Squares';

const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 }
};

const hVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            delay: 1
        }
    }, 
    exit: { opacity: 0, y: 100 }
};

const About = () => {
    return (
        <motion.div 
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div 
            variants={hVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            >
                <h2>About</h2>
            </motion.div>
            <Squares />
        </motion.div>
    )
}

export default About;