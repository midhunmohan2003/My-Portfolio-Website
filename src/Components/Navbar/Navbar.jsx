import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/mlogo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'


function Navbar() {
  const [showMenu, setShowMneu]=useState(false)
  return (
    <>
      <nav className="navbar">

        <img src={logo} alt="logo"  className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>

        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me </button>



            <img src={menu} alt="menu"  className='mobMenu'  onClick={()=>setShowMneu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMneu(!false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMneu(!false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMneu(!false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMneu(!false)}>Contact</Link>

        </div>
        
      </nav> 
    </>
  )
}

export default Navbar
