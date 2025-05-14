import { useNavigate } from "react-router-dom";
import homeImage from "/src/assets/player-home-pokemon-game.png";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="home-button">
      <img src={homeImage} alt="home-image" />
      <span className="tooltip">Home</span>
    </button>
  );
}

export default HomeButton;
