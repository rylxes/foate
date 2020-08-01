import NextLink from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";


export default function TeamCard({ cardData }) {
  return (
    <div className="about__team-card">
      <img
        className="about__team-card-avatar"
        src={`./img/avatar/${cardData.avatar}`}
        alt="team avatar"
      />
      <h6>{cardData.name}</h6>
      <p>{cardData.role}</p>
      <div className="about__team-card-social">
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
  );
}
