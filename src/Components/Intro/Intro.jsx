import React from 'react'
import './intro.css'
import bg from '../../assets/boyimg.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'


function Intro() {
  return (
    <>
      <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span>I'm <span className="introName">Midhun</span> <br /> React Developer </span>
            <p className="introPara">I'm a skilled react developer in creating visually and <br /> user friendly website</p>
            <Link><button className="btn"> <img src={btnImg} alt="hire me" className='btnImg' /> Hire Me </button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
      </section>
    </>
  )
}

export default Intro
