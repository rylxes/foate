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
                  85-87 Bayham Street
                </li>
                <li>
                  London, England,
                </li>
                <li>
                  NW1 0AG
                </li>
                <li>
                  0700 000 0000
                </li>
              </ul>
            </div>

            <div>
              <span className="footer__content-title">Website Links</span>
              <div className="footer__content-links">
              <NextLink href="/">
                <a>Home</a>
              </NextLink>
              <NextLink href="/about">
                <a>About</a>
              </NextLink>  
              <NextLink href="/properties">
                <a>Properties</a>
              </NextLink>
              <NextLink href="/investment">
                <a>Investments</a>
              </NextLink>
              <NextLink href="/design">
                <a>Designs</a>
              </NextLink>
              <NextLink href="/contact">
                <a>Contact</a>
              </NextLink>
              <NextLink href="/login/investor">
                <a>Login</a>
              </NextLink>
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
        First-String Limited &copy; {new Date().getFullYear()} | Powered by <a style={{color: '#FF9800'}} href="https://webenlist.com">Webenlist</a>
      </footer>
    </div>
  );
}
