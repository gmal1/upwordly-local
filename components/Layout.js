import '../style.css';
import '../fonts.css';
import { bubble as Menu } from 'react-burger-menu';
import Link from 'next/link';
import React from 'react';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#575b70'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '40px',
    width: '40px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#1a1b21',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#1a1b21'
  },
  bmItemList: {
    color: '#b8b7ad',
    overflow: 'hidden',
    height: 'unset',
    padding: '0.8em',
    width: '100%',
  },
  bmItem: {
    display: 'inline-block',
    fontSize: '2.5rem',
    padding: '1rem 0'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const Layout = props => (
    <div>
      <Menu
          styles={styles}
          right
          noOverlay
          pageWrapId="landing-wrapper"
          width="100%">
        <Link href="/signin"><a className="text-5xl py-4">Sign In</a></Link>
        <br />
        <a id="home" className="menu-item" href="/">Home</a>
        <br />
        <a id="about" className="menu-item" href="/about">About</a>
        <br />
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <br />
      </Menu>
      {props.children}
    </div>
);

export default Layout;