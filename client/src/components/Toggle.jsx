import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    //const fade = useSpring({
    const {color, y} = useSpring ({
        //opacity: isToggled ? 1 : 0,
        //this is the to property. this is the end state
        //this ternary operator says if isToggled is true change opacity to one.
        //fontSize: isToggled ? '2rem' : '5em',
        color: isToggled ? '#3AE01D' : '#c5f1ff',
        y: isToggled ? 0 : -50
    })

    return (
        <div>
            <AnimatedTitle style={{
                transform: y.interpolate(y => (`translate3d(0,${y}px,0)`)),
                color
            }}>
                Hello
            </AnimatedTitle>
            <button onClick={() => setToggle(!isToggled)}>
                Toggle
            </button>
        </div>
    )
}

const AnimatedTitle = animated.h1;

export default Toggle