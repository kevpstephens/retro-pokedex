import { Link, useNavigate } from "react-router-dom";
import homeImage from "/src/assets/player-home-pokemon-game.png";

function HomeButton() {
  return (
    <>
      <Link to="/">
        <button className="home-button">
          <img src={homeImage} alt="home-image" />
          <span className="tooltip">Home</span>
        </button>
      </Link>
    </>
  );
}

export default HomeButton;
