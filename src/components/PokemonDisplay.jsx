function PokemonDisplay({ pokemon }) {
  if (!pokemon) return null;
  const imageUrl = pokemon.sprites.other["official-artwork"].front_default;
  const capitalisedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokemonId = pokemon.id;
  const pokemonType = pokemon.types.map((type, i) => {
    return type.type.name;
  });
  const typeColors = {
    electric: "#f8d030",
    fire: "#f08030",
    water: "#6890f0",
    grass: "#78c850",
    bug: "#a8b820",
    normal: "#a8a878",
    poison: "#a040a0",
    ground: "#e0c068",
    fairy: "#ee99ac",
    psychic: "#f85888",
    rock: "#b8a038",
    ghost: "#705898",
    dragon: "#7038f8",
    dark: "#705848",
    ice: "#98d8d8",
    fighting: "#c03028",
    steel: "#b8b8d0",
    flying: "#a890f0",
  };

  return (
    <section id="pokemon-display-card">
      <div className="card-header">
        <span className="poke-id-circle">#{pokemonId}</span>
        <h2 className="pokemon-name">{capitalisedName}:</h2>
      </div>
      <img src={imageUrl} alt={`${pokemon.name} image`} />
      <ul style={{ listStyle: "none" }}>
        Type:{" "}
        <div className="type-badge-wrapper">
          {pokemonType.map((type) => (
            <li
              key={type}
              className="type-badge"
              style={{
                backgroundColor: typeColors[type] || "#ccc",
                color: "#000",
                marginRight: "0.5rem",
              }}
            >
              {type}
            </li>
          ))}
        </div>
        <li>Height: {pokemon.height / 10}m </li>
        <li>Weight: {pokemon.weight * 0.1}kg</li>
        <li>
          Abilities:{" "}
          {pokemon.abilities
            .map((abilityObj) => {
              return abilityObj.ability.name;
            })
            .join(", ")}
        </li>
      </ul>
    </section>
  );
}

export default PokemonDisplay;
