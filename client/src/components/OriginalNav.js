import React from 'react';
import { animated } from 'react-spring';
import { Router, Link } from '@reach/router';

const Home = () => <a>Home</a>;
const About = () => <a>About</a>;
const Portfolio = () => <a>Portfolio</a>;
const Contact = () => <a>Contact</a>;


const Nav = ({ style }) => {
    return (
        <animated.div className="nav-wrapper" style={style}>
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
        </animated.div>
    );
};

export default Nav;