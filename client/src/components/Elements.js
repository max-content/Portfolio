import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Header = styled.header`
    background: var(--oxfordBlue);
    color: var(--blizzardBlue);
    height: 400px;
    padding: 20px;
    display: flex;
    > svg {
        margin-right: 20px;
    }
    > * {
        margin: 0;
    }
    h1 {
        font-size: 1rem;
    }
`;

export const Container = styled.div`
    width: 95%;
    max-width: 600px;
    margin-left: 15px;
    padding-bottom: 60px;
    h2 {
        color: var(--slimyGreen);
    }
    div {
        color: var(--blizzardBlue);
    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-gap: 20px;
`;

export const Card = styled(motion.div)`
    border-radius: 15px;
    padding: 15px;
    color: var(--blizzardBlue);
    box-shadow: 1px 1px 15px rgba(0,0,0,0.4);
    h3 {
        margin-top: 0;
        font-size: 2rem;
    }
    img {
        width: 100%;
    }
`;

export const Paragraph = styled.div`
    background-color: var(--indigoDye);
    color: var(--lightGreen);
    border-radius: 15px;
    box-shadow: 10px, 5px, 5px, var(--oxfordBlue);
    padding-top: -50px;
    padding: 25px;
    margin-top: 5px;
`;

export const MenuButton = styled.div`
    padding: 5px;
`;