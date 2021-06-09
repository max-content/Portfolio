import React, { useState } from 'react';
import { Router } from '@reach/router';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Container, CardGrid, Header, MenuButton} from './components/Elements';
import Menu from './Menu';
import Nav from './components/Nav';
import './App.css';
import Logo from './components/Logo';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


const App = (props) => {
    const [isToggled, setToggle] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCardActive, setIsCardActive] = useState(true);

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}>
            <Header>
                <MenuButton onClick={() => setIsNavOpen(true)} >
                    <Menu />
                </MenuButton>
                  <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                  <Logo />
            </Header>
            <Container>
            <Router>
                    <About path="/about" />
                    <Portfolio path="/portfolio" />
                    <Contact path="/contact" />
                </Router>
                {props.children}
            </Container>
        </motion.div> 
    )
}

export default App;
