import React, { useState } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Link,
    useLocation
} from 'react-router-dom';
import { 
    motion, 
    useMotionValue, 
    useTransform, 
    AnimatePresence 
} from 'framer-motion';
import { Container, Header, MenuButton} from './components/Elements';
import Nav from './components/Nav';
import './App.css';
import Menu from './Menu';
import Home from './components/Home';
import About from './components/About';

function App() {
    const [value, setValue ] = useState(0);
    const [isToggled, setToggle] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCardActive, setIsCardActive] = useState(true);
    const location = useLocation();
    console.log("location", location);

    const x = useMotionValue(0);
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            >
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
                <h2 style={{ color: "var(--slimyGreen)"}}>Super Cool</h2>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path= "/" component={Home} />
                        <Route exact path='/about' component={About}/>
                    </Switch>
                </AnimatePresence>
            </Container>
        </motion.div> 
    );
};

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default AppWrapper;