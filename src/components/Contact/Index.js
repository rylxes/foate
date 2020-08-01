import NextLink from 'next/link'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Index() {
  return (
    <div className="contact">
      <div className="header">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="container">
        <div className="contact__content">
          <div className="contact__text">
            <h1>Get in touch</h1>
            <p>10 Oxford Street Milton Keynes</p>
            <p>MK12 3KM</p>
            <p>0712 345 6789</p>
            <p>hello@foate.co.uk</p>
            <div className="contact__text-social">
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
                  <FaFacebook />
                </a>
              </NextLink>
            </div>
          </div>
          <form className="contact__form">
            <h1>Contact</h1>
            <div className="contact__form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="contact__form-input valid"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                className="contact__form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
