import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardGrid, Container, Header } from './Elements';
import blue from './imgs/blue.png';
import purp from './imgs/purp.png';
import black from './imgs/black.png';
import green from './imgs/green.png';
import Menu from './Menu';
import './App.css';

const App = () => {
    const [value, setValue ] = useState(0);
    const [isToggled, setToggle] = useState(true);

    return (
        <motion.div initial={{ opacity: 0, x: 200, y:200}} animate={{ opacity: 1, x:0, y:0 }} transition={{ duration: 1 }}>
            <Header>
                <Menu />
                <h1 style={{ color: "var(--lightGreen)"}}>Header</h1>
            </Header>
            <Container>
                <AnimatePresence>
                    { isToggled && 
                        <motion.h2 style={{ color: "var(--lightGreen)"}} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1, x: value + "px" }}
                        exit={{ opacity: 0 }}>
                            Super Cool
                        </motion.h2>
                    }
                </AnimatePresence>
                <button onClick={() => setToggle(prevValue => (prevValue ? 0 : 1))}>
          Toggle
        </button>
                <input type="range" min="-300" max="100" value={value} onChange={(e) => setValue(e.target.value)} />
                <CardGrid>
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