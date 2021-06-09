import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Router, Link } from '@reach/router';
import Close from './imgs/Close';
import { MenuButton } from './Elements';

const variants = {
    open: { x: 0 },
    closed: { x: "-100%",
        transition: {
            delay: 0.2
        }
    }
  };

const ulVariants = {
    open: {
        scale: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.05,
            staggerDirection: 1,
            when: "afterChildren"
        }
    },
    closed: {
        scale: 1
    }
};

const liVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: -20, 
        opacity: 0
    }
};

const links = [ "about", "portfolio", "contact"];

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            borderBottom: isCurrent ? "solid 4px var(--airSuperiorityBlue)" : "none"
          }
        };
      }}
    />
  );


const Nav = ({ isNavOpen, setIsNavOpen }) => {
    return (
        <MenuNav
            variants={variants}
            initial="closed"
            animate={isNavOpen ? "open" : "closed"}
            transition={{ damping: 300 }}
        >
                <MenuButton style={{height: "61px", marginLeft: "-100px", marginTop: "-145px"}} onClick={() => setIsNavOpen(false)}>
                    <Close />
                </MenuButton>
                <motion.ul variants={ulVariants}>
                    {links.map(link => (
                        <motion.li variants={liVariants} key={link}>
                                <NavLink to={link}> {link} </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>

        </MenuNav>
    );
};

const MenuNav = styled(motion.nav)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 25vw;
    height: 100vh;
    padding: 10% 0 20% 5%;
    background: var(--indigoDye);
    box-shadow: 5px 5px 50px #021027;
    z-index: 10;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        display: block;
        text-align: left;
        padding: 0;
        margin: 0;
        font-size: 4rem;
        a {
            color: var(--lightGreen);
            text-decoration: none;
            transition: 0.3s ease border;
            border-bottom: solid 4px transparent;
        }
        a:hover {
            border-bottom: solid 4px var(--airSuperiorityBlue) !important;
        }
    }
`;

export default Nav;