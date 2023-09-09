import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const galleriesMenuItems = [
  { url: '/wedding', title: 'Wedding' },
  { url: '/travel', title: 'Travel' }
]

const miscMenuItems = [
  { url: '/about', title: 'About' },
  { url: '/contact', title: 'Contact' }
]

export default function Menu () {
  const [menuButton, setMenuButton] = useState(false)

  function menuButtonClicked () {
    if (window.innerWidth < 1000) {
      setMenuButton(!menuButton)
    }

    window.scrollTo({ top: 0, left: 0 })
  }

  const menuAnimations = {
    initial: { x: 0 },
    animate: { x: menuButton ? -10 : 10 }
  }

  function MenuItem ({ url, title }) {
    return (
      <motion.li
        initial='initial'
        whileHover='animate'
        variants={menuAnimations}
        onClick={menuButtonClicked}
      >
        <Link to={url}>{title}</Link>
      </motion.li>
    )
  }

  function MenuList () {
    return (
      <ul>
        {galleriesMenuItems.map(item => (
          <MenuItem key={item.title} url={item.url} title={item.title} />
        ))}
        <br></br>
        {miscMenuItems.map(item => (
           <MenuItem key={item.title} url={item.url} title={item.title} />
        ))}
      </ul>
    )
  }

  return (
    <nav className='nav-container'>
      <div className='header'>
        <Link to='/'>
          <h3>Andrew Kusakin</h3>
          <h4>Photography</h4>
        </Link>
      </div>
      <div className='menu'>
        <MenuList />
      </div>

      <motion.div
        className='mobile-menu'
        initial={{ width: 0, x: 100 }}
        animate={{ width: menuButton ? '450px' : 0, x: menuButton ? 0 : 100 }}
        style={{ display: menuButton ? 'flex' : 'none' }}
        transition={{ duration: 1 }}
      >
        <MenuList />
      </motion.div>
      <motion.div
        className='mobile-menu-bg'
        initial={{ width: 0, x: 100 }}
        animate={{ width: menuButton ? '100%' : 0, x: menuButton ? 0 : 100 }}
        style={{ display: menuButton ? 'block' : 'none' }}
        transition={{ duration: 1 }}
      ></motion.div>

      <button className='menu-btn' onClick={e => setMenuButton(!menuButton)}>
        {menuButton ? (
          <CloseIcon fontSize='large' />
        ) : (
          <MenuIcon fontSize='large' />
        )}
      </button>
    </nav>
  )
}
