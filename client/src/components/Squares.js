import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'loadash';

const COLORS = [
    "var(--oxfordBlueDk)",
    "var(--oxfordBlue)",
    "var(--indigoDye)",
    "var(--airSuperiorityBlue)",
    "var(--blizzardBlue)",
    "var(--slimyGreen)",
    "var(--limeGreen)",
    "var(--lightGreen)"
]

const Squares = () => {

    const [colorsList, setColorsList] = useState(COLORS);
    return (
        <div>
            <button onClick={() => setColorsList(shuffle(colorList))}>
                Shuffle
            </button>
            {colorsList.map(color => (
                <motion.div key={color} 
                    positionTransition={{
                        damping: 100, 
                        stiffness: 10
                    }}
                    style={{
                        background: color,
                        height: 100,
                        width: 100
                    }}
                />
            ))}
        </div>
    )
}

export default Squares;