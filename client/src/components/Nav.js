import React from 'react';
import { motion } from 'framer-motion';
import { Router, Link } from '@reach/router';

const Home = () => <a>Home</a>;
const About = () => <a>About</a>;
const Portfolio = () => <a>Portfolio</a>;
const Contact = () => <a>Contact</a>;

const Nav = () => {
    return (
        <motion.div className="nav-wrapper" animate={{x: 5 }} transition={{ ease: "easeIn", duration: 10}}>
            <nav>
                    <Link to="/">
                        Home
                    </Link>   
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/portfolio">
                        Portfolio
                    </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </nav>
        </motion.div>
    );
};

export default Nav;