import { useEffect } from "react";

function NavigationBar({ currentId, onNext, onPrev, onRandom, pokemon }) {
  useEffect(() => {
    function handleKeyDown(event) {
      console.log("keydown registered")
      if (event.key === "ArrowRight") {
        onNext();
      }
      if (event.key === "ArrowLeft") {
        onPrev()
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup listener when component unmounts
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pokemon]);

  return (
    <div className="pokemon-nav">
      <button onClick={onPrev}>← Previous</button>
      <button onClick={onRandom}>🎲 Random</button>
      <button onClick={onNext}>Next →</button>
    </div>
  );
}

export default NavigationBar;
