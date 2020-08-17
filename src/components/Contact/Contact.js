import NextLink from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup'


const ContactFormSchema = yup.object().shape({
    name: yup.string().min(2, 'Name field must be more than two characters long.').required(),
    email: yup.string().email('Please enter a valid email address.').required(),
    subject: yup.string().min(2, 'Subject field must be more than two characters long.').required(),
    message: yup.string().min(2, 'Message field must be more than two characters long.').required(),
  })


export default function Contact() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(ContactFormSchema)
  });
  

  const onSubmit = ({name, email, subject, message}) => {
    console.log({name, email, subject, message})
    
  }

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
          <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Contact</h1>
            <div className="contact__form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="contact__form-input"
                ref={register}
                name="name"
              />
              {errors.name && (<span style={{color: 'red'}}>{errors.name.message}</span>) }
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="contact__form-input"
                ref={register} 
                name="email"
              />
              {errors.email && (<span style={{color: 'red'}}>{errors.email.message}</span>) }
            </div>
            <div className="contact__form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="contact__form-input valid"
                ref={register} 
                name="subject"
              />
              {errors.subject && (<span style={{color: 'red'}}>{errors.subject.message}</span>) }
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                className="contact__form-textarea"
                ref={register} 
                name="message"
              ></textarea>
              {errors.message && (<span style={{color: 'red'}}>{errors.message.message}</span>) }
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
