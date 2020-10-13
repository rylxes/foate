import NextLink from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import ReactMarkDown from 'react-markdown'
import ContactForm from './ContactForm'


export default function Contact({ contact }) {

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
            <h1>{contact.contact_title}</h1>
            <ReactMarkDown source={contact.contact_content} />
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

          
          <ContactForm/>
          

        </div>
      </div>
    </div>
  );
}


