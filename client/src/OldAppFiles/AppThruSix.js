import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardGrid, Container, Header } from './components/Elements';
import blue from './imgs/blue.png';
import purp from './imgs/purp.png';
import black from './imgs/black.png';
import green from './imgs/green.png';
import Menu from './Menu';
import Modal from './components/Modal';
import Accordion from './components/Accordion';
import './App.css';

const App = () => {
    const [value, setValue ] = useState(0);
    const [isToggled, setToggle] = useState(false);

    return (
        <motion.div initial={{ opacity: 0, x: 200, y:200}} animate={{ opacity: 1, x:0, y:0 }} transition={{ duration: 1 }}>
            <Header>
                <Menu />
                <h1 style={{ color: "var(--lightGreen)"}}>Header</h1>
            </Header>
            <Container>
                
                <h2 style={{ color: "var(--slimyGreen)"}}>Super Cool</h2>
                <button onClick={() => setToggle(true)}>
                    Toggle
                </button>
                <CardGrid>
                    <Modal isToggled={isToggled} setToggle={setToggle}>
                        <Card style={{ background: "var(--oxfordBlue)" }}>
                            <h3>Some Card</h3>
                            <img src={black} />
                        </Card>
                    </Modal>
                    <Accordion />
                    <Card style={{ background: "var(--oxfordBlue)" }}>
                        <h3>Some Card</h3>
                        <img src={purp} />
                    </Card>
                    <Card style={{ background: "var(--oxfordBlue)" }}>
                        <h3>Some Card</h3>
                        <img src={blue} />
                    </Card>
                    <Card style={{ background: "var(--oxfordBlue)" }}>
                        <h3>Some Card</h3>
                        <img src={black} />
                    </Card>
                    <Card style={{ background: "var(--oxfordBlue)" }}>
                        <h3>Some Card</h3>
                        <img src={green} />
                    </Card>
                </CardGrid>
            </Container>
        </motion.div> 
    )
}

export default App;