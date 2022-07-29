import React from 'react';
import './nav.css';
import {AiOutlineHome ,AiOutlineUser} from 'react-icons/ai';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {BiBook} from 'react-icons/bi';
import {AiFillProject} from 'react-icons/ai';
import {MdSchool} from 'react-icons/md'
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav ==='#' ? 'active':''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav ==='#about' ? 'active':''}  ><AiOutlineUser/></a>
      <a href="#qualification" onClick={()=>setActiveNav('#qualification')} className={activeNav ==='#qualification' ? 'active':''}  ><MdSchool/></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav ==='#skills' ? 'active':''} ><BiBook/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active':''}><AiFillProject/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active':''}><BsFillTelephoneOutboundFill/></a>
    </nav>
  )
}

export default Nav