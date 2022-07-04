import './navbar.css';
import {AiOutlineHome,
   AiOutlineUser,
   AiFillHeart,
   AiFillContacts} 
   from 'react-icons/ai';
   import { useState } from 'react';
    


const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
  
    <nav>
      <a href="#" onClick={() => setActiveNav('#home')}  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      {/* <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiTwotoneBook /></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillHeart/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts /></a>
    </nav>
  )
}

export default Navbar