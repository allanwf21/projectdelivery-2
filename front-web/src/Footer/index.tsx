import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as IstagramIcon } from './instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido por RedeCodeStyle 
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target="_new">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/">
          <IstagramIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer;