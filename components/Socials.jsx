import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/your-profile" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/your-profile" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/c/your-channel" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/your-profile" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <a key={index} href={social.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
