function PokemonNav({ currentId, onNext, onPrev, onRandom }) {
  return (
    <div className="pokemon-nav">
      <button onClick={onPrev} >
        ← Previous
      </button>
      <button onClick={onRandom}>🎲 Random</button>
      <button onClick={onNext}>Next →</button>
    </div>
  );
}

export default PokemonNav;