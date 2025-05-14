const dummyPikachu = {
  name: "pikachu",
  sprites: {
    other: {
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
    },
  },
  types: [{ type: { name: "electric" } }],
  height: 4,
  weight: 60,
  stats: [
    { base_stat: 35, stat: { name: "hp" } },
    { base_stat: 55, stat: { name: "attack" } },
    { base_stat: 40, stat: { name: "defense" } },
    { base_stat: 50, stat: { name: "special-attack" } },
    { base_stat: 50, stat: { name: "special-defense" } },
    { base_stat: 90, stat: { name: "speed" } },
  ],
  abilities: [
    { ability: { name: "static" } },
    { ability: { name: "lightning-rod" } },
  ],
};

export default dummyPikachu