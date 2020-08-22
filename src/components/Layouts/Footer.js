import NextLink from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Newsletter from './Newsletter'


export default function Footer() {
  const styles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .85)), url('/img/london_2.jpg')`,
    backgroundPosition: "center top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: '8rem 0'
  };

  return (
    <div>
      <Newsletter/>
      <div style={styles}>
        <div className="container">
          <div className="footer__content">

            <div>
              <img src="/img/logo.svg" alt="logo"/>
              <ul className="footer__content-contact">
                <li>
                  <a href="">10 Bird Street London</a>
                </li>
                <li>
                  <a href="">0701 234 5602</a>
                </li>
              </ul>
            </div>

            <div>
              <span className="footer__content-title">Website Links</span>
              <div className="footer__content-links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact</a>
              </div>
            </div>

            <div>
              <span className="footer__content-title">Social</span>
              <div className="footer__content-socials">
                <NextLink href="/">
                  <a>
                    <FaTwitter />
                  </a>
                </NextLink>
                <NextLink href="/">
                  <a>
                    <FaLinkedin />
                  </a>
                </NextLink>
                <NextLink href="/">
                  <a>
                    <FaInstagram />
                  </a>
                </NextLink>
                <NextLink href="/">
                  <a>
                    <FaFacebook />
                  </a>
                </NextLink>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="footer__secondary">
        FOATE &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
