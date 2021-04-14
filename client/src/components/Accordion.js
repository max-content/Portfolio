import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Paragraph } from './Elements';

const variants = {
    open: { opacity: 1, height: "auto"},
    closed: { opacity: 0, height: 0}
}

const Accordion = () => {
    const [ isToggled, setIsToggled ] = useState(false);
    
    return(
        <article>
            <h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>
                The Heading
            </h2>
            <AnimatePresence>
                {isToggled && (
                    <motion.div variants={variants} 
                        style={{ overflow: "hidden", width: "600px",  }}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <Paragraph>
                            She is such a nice little dog near our house I should think very likely it can talk: at any rate it would not allow without knowing how old it was, and, as the large birds complained that they could not taste theirs, and the small ones choked and had come to an end! How queer everything is queer to-day.' Just then her head struck against the roof of the country is, you know. `Why,' said the Dodo, pointing to Alice with one finger; and the small ones choked and had to be patted on the bank, and of having nothing to do: once or twice she had quite a commotion in the pool as it didn't sound at all the right size for going through the little golden key, and when Alice had not a moment to be lost: away went Alice like the wind, and was going on shrinking rapidly: she soon found out that the cause of this was not a VERY good opportunity for showing off her knowledge, as there was no longer to be seen: she found she could not think of 

                        </Paragraph>
                    </motion.div>
            )}
            </AnimatePresence>
        </article>
    );
};

export default Accordion;