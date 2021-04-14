import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Toggle from './components/Toggle';
//import Toggle from './components/Toggle1';
import Nav from './components/Nav';
import Checkout from './components/Checkout';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
//animated will works like the same as styled.div -> animated.div

const App = () => {

  const [isNavOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen 
    ? `translate3d(75%,0,0) scale(1)` 
    : `translate3d(100%,0,0) scale(1)`
  });

  //useSpring hook will create an object full of animation
  const fade = useSpring({
    from: {
      opacity: 0
    },
      opacity: 1
    //this will fade in an object from 0 to 1 where from is the starting point and to is the ending point. 
    //to works like else you it automates because it knows that you will always need to be going somewhere.

  });
  console.log(fade);

  return (
    <animated.div className="App" style={fade}>
        <header className="App-header">
          <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
            Menu
          </button> 
          <Nav style={navAnimation} />
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            Cart
          </button>
        </header>
          <main>
            <Toggle />
          </main>
            <Checkout isOpen={isOpen} />
    </animated.div> 
  );
}

export default App;