import React from 'react';
import { motion } from 'framer-motion';
import Slideshow from './Slideshow';

const Home = () => {
    return (
        <motion.div 
            initial = {{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            <h2>
                Home
            </h2>
            <Slideshow />
        </motion.div>
    );
};

export default Home;