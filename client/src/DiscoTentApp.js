import React from 'react';
import Menu from './Menu';
import { Card, CardGrid, Container} from './components/Elements';
import { motion } from 'framer-motion';
import Accordion from './components/Accordion';
import './App.css';

export const App = () => {
    return (
        <motion.div>
            <Container>
                <CardGrid>
                    <Card>
                        <Accordion />
                    </Card>
                </CardGrid>
            </Container>
        </motion.div>
    )
}

export default App;