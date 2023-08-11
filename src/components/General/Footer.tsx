import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center text-neutral-400 pb-4 pt-8 text-base justify-center">
      Feito por{" "}
      <a href="https://github.com/aridsm" target="_blank">
        Ariane Morelato <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
