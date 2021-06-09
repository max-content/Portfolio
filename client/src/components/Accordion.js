import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Paragraph } from './Elements';
import discotent from './imgs/discotent.png';
import styled from '@emotion/styled';

const HeaderTwo = styled.h2`
    color: var(--airSuperiorityBlue);
`;

const variants = {
    open: { opacity: 1, height: "auto"},
    closed: { opacity: 0, height: 0}
}

const Accordion = () => {
    const [ isToggled, setIsToggled ] = useState(false);
    
    return(
        <article>
            <HeaderTwo role="button" onClick={() => setIsToggled(prevState => !prevState)}>
                See More
            </HeaderTwo>
            <AnimatePresence>
                {isToggled && (
                    <motion.div variants={variants} 
                        style={{ overflow: "hidden", width: "600px"}}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <Paragraph>
                            <img src={discotent} />
                        </Paragraph>
                    </motion.div>
            )}
            </AnimatePresence>
        </article>
    );
};

export default Accordion;