import './footer.css';
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
    <a href="#/" className='footer_logo'>Alexander</a>

    <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      {/* <li><a href="#experience">Experience</a></li> */}
      <li><a href="#portfolio">Portfolio</a></li>
      {/* <li><a href="#testimonial">Testimonials</a></li> */}
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer_socials">
        <a href="https://linkedin.com" target="blank"> <BsLinkedin /> </a>
        <a href="https://github.com" target="blank"> <BsGithub /> </a>
        <a href="https://facebook.com" target="blank"> <BsFacebook /> </a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Alexander Teklu. all rights reserved</small>
    </div>
    
    </footer>
  )
}

export default Footer;