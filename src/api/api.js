import axios from "axios";

async function getPokemonByName(name) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    return response;
  } catch (err) {
    throw new Error("Pokémon not found");
  }
}

export default getPokemonByName;
