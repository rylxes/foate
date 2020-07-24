import { useState } from "react";
import NextLink from "next/link";
import { useRouter } from 'next/router'
import { FaBeer } from 'react-icons/fa';


export default function Navbar2() {
  
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => setMenuState(!menuState);
  const {pathname} = useRouter();
  

  return (
    <>
      <nav className="container mx-auto">
        <div className="logo">
          <img src="./img/logo.svg" alt="logo"/>
        </div>
        <ul className={menuState ? "toggle navMenu" : "navMenu"}>
          <NextLink href="/">
            <a className={pathname == '/' ? 'activeLink' : ''}>Home</a>
          </NextLink>
          <NextLink href="/about">
            <a className={pathname == '/about' ? 'activeLink' : ''}>About</a>
          </NextLink>
          <NextLink href="/services">
            <a className={pathname == '/services' ? 'activeLink' : ''}>Services</a>
          </NextLink>
          <NextLink href="/contact">
            <a className={pathname == '/contact' ? 'activeLink' : ''}>Contact</a>
          </NextLink>
          <li onClick={toggleMenu} className="close">
            &times;
          </li>
        </ul>
        <div className="menu" onClick={toggleMenu} >
        <img className="w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3W0Q2AMAxDQRcxOExOhyBSoupuAvvvJQA0WEme7hEVVpKve0SFq3tAFUemuZO83SMAgCIyfppjotGRaWQ8AJxExk9zTDQ6Mo2MB+CPDXJLBiVsKHgMAAAAAElFTkSuQmCC"/>
        </div>
      </nav>
      <style jsx>
        {`
          
          nav {
            background: rgba(255, 255, 255, 1);
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 5px 0;
            min-height: 70px;
          }

          nav .logo {
            // margin-left: 50px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          
          nav .logo h1 {
            color: #fff;
          }

          .logo img{
            width: 100px;
          }
          nav ul {
            list-style: none;
            margin-right: 50px;
            display: flex;
            z-index: 1;
          }
          
          nav ul a {
            text-decoration: none;
            color: #20A3DD;
            text-transform: uppercase;
            opacity: 0.6;
            margin: 0 15px;
            
          }
          nav ul a::after{
            content: "";
            display: block;
            height: 1px;
            background-color: #20A3DD;
            width: 0%;
            transition: all .4s ease;
            opacity: 0;
            margin-top: 2px;
          }
          nav ul a:hover:after{
            width: 100%;
            opacity: 1;
          }
          nav .activeLink{
            border-bottom: 1px solid #20A3DD;
          }
          nav ul a:hover {
            opacity: 1;
            color: #20A3DD;
            transition: all 0.2s ease-in;
          }

          nav .menu,
          nav .close {
            cursor: pointer;
            text-transform: uppercase;
            border: 1px solid #fff;
            padding: 10px 20px;
            margin-right: 20px;
            display: none;
          }

          nav .close {
            position: absolute;
            top: 20px;
            right: 0;
            border-radius: 50px;
          }

          @media (max-width: 750px) {
            nav .logo,
            nav ul {
              justify-content: center;
              width: 100%;
              margin: 0;
              text-align: center;
              line-height: 30px;
            }
          }

          @media (max-width: 500px) {
            nav ul {
              position: fixed;
              top: 0;
              left: -100%;
              background-image: linear-gradient(-90deg, indigo, #6666e7);
              width: 100%;
              height: 50vh;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-direction: column;
              z-index: 10;
              transition: 0.3s linear;
            }
            nav ul.toggle {
              left: 0;
            }
            nav ul li {
              line-height: normal;
            }

            nav .menu,
            nav .close {
              display: block;
            }

            nav .logo {
              width: initial;
              margin-left: 20px;
              line-height: 70px;
            }
          }
        `}
      </style>
    </>
  );
}
