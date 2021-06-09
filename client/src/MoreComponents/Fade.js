import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Fade = ({ children, isActive}) => {
    return(
        <AnimatePresence>
            {isActive && (
                <motion.div 
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacxirt: 1 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Fade;