import "./Header.css";
import {TiSocialFacebook} from 'react-icons/ti';
import {IoLogoInstagram} from 'react-icons/io';
import {TiSocialLinkedin} from 'react-icons/ti';
import {AiOutlineGithub} from 'react-icons/ai';

function Header() {
  return (
    <div className="header-container">
      <div id="title">
        <h1>React To Do List</h1>
      </div>
      <div id="social-media">
        <a href="https://www.facebook.com/antonio.giambrasb/"
              target="_blank"
              rel="noreferrer"><TiSocialFacebook /></a>
        <a href="https://www.instagram.com/antonimason/"
              target="_blank"
              rel="noreferrer"><IoLogoInstagram /></a>
        <a href="https://www.linkedin.com/in/antonio-giambra-castellanos-293148233/"
              target="_blank"
              rel="noreferrer"><TiSocialLinkedin /></a>
        <a href="https://github.com/Antonimason"
              target="_blank"
              rel="noreferrer"><AiOutlineGithub/></a>
      </div>
    </div>
  );
}
export default Header;