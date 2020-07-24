import NextLink from 'next/link'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'



export default function Footer() {
  const styles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .85)), url('./img/london.jpg')`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
  
  return (
    <div>

    
    <div style={styles}>
      <div className="container text-white mx-auto pb-16">
        <div className="flex flex-wrap justify-around items-center py-5 border-b border-gray-300 mb-8">
          <img src="./img/logo.svg" alt="logo"/>
          <span className=" -mx-2">Website Links</span>
          <span>Social</span>
        </div>
        <div className="flex flex-wrap justify-around items-start content-between w-full h-auto">
          <ul className="leading-5 ">
            <li><a href="">10 Bird Street London</a></li>
            <li><a href="">0701 234 5602</a></li>
          </ul>
          <div className="flex flex-col items-center justify-between">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col justify-between h-24">
            <NextLink href="/"><a><FaTwitter/></a></NextLink>
            <NextLink href="/"><a><FaLinkedin/></a></NextLink>
            <NextLink href="/"><a><FaInstagram/></a></NextLink>
            <NextLink href="/"><a><FaFacebook/></a></NextLink>
          </div>
        </div>
      </div>
    </div>

    <footer className="bg-primary text-white p-10 text-center">
      FOATE &copy; {new Date().getFullYear() }
    </footer>
    </div>
  )
}
