import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Menu() {

  const ref = useRef(null);

  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };



  const [menuButton, setMenuButton] = useState(false);

  function menuButtonClicked(){
    if (window.innerWidth < 1000) {
      setMenuButton(!menuButton)
    }
    
   scrollToTop() 
  }

  const menuAnimations = {
    initial: { x: 0 },
    animate: { x: menuButton ? -10 : 10 },
  };

  function MenuItem({ child }) {
    return (
      <motion.li
        initial="initial"
        whileHover="animate"
        variants={menuAnimations}
        onClick={menuButtonClicked}
        
      >
        {child}
      </motion.li>
    );
  }

  function MenuList() {
    return (
      <ul>
        <MenuItem child={<Link to="/wedding">Wedding</Link>}></MenuItem>
        <MenuItem child={<Link to="/portrait">Portrait</Link>}></MenuItem>
        <MenuItem child={<Link to="/travel">Travel</Link>}></MenuItem>
        <br></br>
        <MenuItem child={<Link to="/about">About</Link>}></MenuItem>
        <MenuItem child={<Link to="/contact">Contact</Link>}></MenuItem>
      </ul>
    );
  }

  return (
    <nav className="nav-container">
      <div className="menu-container"><div className="header">
        <h3>Andrew Kusakin</h3>
        <h4>Photography</h4>
      </div>
      <div className="menu">
        <MenuList />
      </div></div>
      
      
      <motion.div
        className="mobile-menu"
        initial={{ width: 0, x: 100 }}
        animate={{ width: menuButton ? "450px" : 0, x: menuButton ? 0 : 100 }}
        style={{ display: menuButton ? "flex" : "none" }}
        transition={{ duration: 1 }}
      >
        
       
        <MenuList />
        
      </motion.div>
      <motion.div className="mobile-menu-bg"
      initial={{ width: 0, x: 100 }}
      animate={{ width: menuButton ? "100%" : 0, x: menuButton ? 0 : 100 }}
      style={{ display: menuButton ? "block" : "none" }}
      transition={{ duration: 1 }}>
        
      </motion.div>
    
      <button className="menu-btn" onClick={(e) => setMenuButton(!menuButton)}>
        {menuButton ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/> }
      </button>
    </nav>
  );
}
