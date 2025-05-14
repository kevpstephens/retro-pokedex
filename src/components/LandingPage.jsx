import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to the Retro Pokédex!</h1>

          <button onClick={() => navigate("/pokedex")} className="enter-button">
        Enter Pokédex
      </button>

      {/* <div className="image-container">
        <img
          src="public/pikachu-waving.png"
          alt="Pikachu"
          className="landing-image"
        />
      </div> */}

      <div className="pikachu-wrapper">
        <img
          src="public/pikachu-waving.png"
          alt="Modern Pikachu"
          className="pikachu modern"
        />
        <img
          src="public/pikachu-retro.png"
          alt="Retro Pikachu"
          className="pikachu retro"
        />
      </div>
    </div>
  );
}

export default LandingPage;
