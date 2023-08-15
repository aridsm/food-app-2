import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound: React.FC = () => {
  return (
    <div className="text-center pt-12">
      <p>A página não foi encontrada ou não está disponível!</p>
      <FontAwesomeIcon
        icon={faFaceFrown}
        className="text-xl md:text-3xl mt-4"
      />
    </div>
  );
};

export default NotFound;
