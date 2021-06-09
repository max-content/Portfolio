import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Card, CardGrid, Container, Header, MenuButton} from './components/Elements';
import blue from './components/imgs/blue.png';
import purp from './components/imgs/purp.png';
import black from './components/imgs/black.png';
import green from './components/imgs/green.png';
import Menu from './Menu';
import Modal from './components/Modal';
import Accordion from './components/Accordion';
import Nav from './components/Nav';
import './App.css';
import Squares from './components/Squares';
import Slideshow from './components/Slideshow';
import About from './components/About';
import Home from './components/Home';

const App = () => {
    const [value, setValue ] = useState(0);
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
                <h1>Header</h1>
                <Link to="/about"> About </Link>
                <Link to="/"> Home </Link>
            </Header>
            <Container>
                <Slideshow />
                <Squares />
                <h2 style={{ color: "var(--slimyGreen)"}}>Super Cool</h2>
                <button onClick={() => setToggle(true)}>
                    Toggle
                </button>
                <Accordion />
                <CardGrid>
                    <Modal isToggled={isToggled} setToggle={setToggle}>
                        <Card style={{ background: "var(--oxfordBlue)" }}>
                            <h3>Some Card</h3>
                            <img src={black} />
                        </Card>
                    </Modal>
                    <Card 
                        drag
                        dragConstraints={{
                            top: -100,
                            left: -100,
                            bottom: 100,
                            right: 100
                        }}
                        style={{ background: "var(--oxfordBlue)" }}>
                        <h3>This Card</h3>
                        <img src={purp} />
                    </Card>
                    <AnimatePresence>
                        {
                            isCardActive && (
                                <motion.div exit={{ height: 0, overflow: "hidden", opacity: 0 }}
                                transition={{
                                    opacity: {
                                        duration: 0
                                    }
                                }}>
                            <Card onDragEnd={(event, info) => {
                                if(Math.abs(info.point.x)>200) {
                                    setIsCardActive(false);
                                }
                            }}
                                drag="x"
                                dragConstraints={{
                                    left: 0,
                                    right: 0
                                }}
                                style={{ 
                                    x,
                                    opacity, 
                                    background: "var(--oxfordBlue)" }}>
                                <h3>Some Card</h3>
                                <img src={blue} />
                            </Card>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                    <Card 
                        whileHover={{ scale: [1.02, 0.8, 1.2], background: "var(--slimyGreen)"}}
                        whileTap={{ background: "var(--airSuperiorityBlue)"}}
                        onHoverEnd={() => console.log("hover end")}
                        style={{ background: "var(--oxfordBlue)" }}>
                        <h3>Some Card</h3>
                        <img src={black} />
                    </Card>
                    <Card 
                        whileHover={{ scale: [1.02, 0.8, 1.2], background: "var(--slimyGreen)"}}
                        whileTap={{ background: "var(--airSuperiorityBlue)"}}
                        onHoverEnd={() => console.log("hover end")}
                        style={{ background: "var(--oxfordBlue)" }}>
                        <h3>Some Card</h3>
                        <img src={green} />
                    </Card>
                </CardGrid>
            </Container>
        </motion.div> 
    )
}

export default App;