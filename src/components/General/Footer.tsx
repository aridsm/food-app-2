import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center text-neutral-400 py-4 text-base justify-center">
      Feito por
      <a href="https://github.com/aridsm" target="_blank" className="ml-1">
        Ariane Morelato <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
