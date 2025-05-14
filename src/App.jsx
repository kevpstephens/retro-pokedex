// External Libraries
import { useEffect, useState } from "react";
// Global Styles
import "./App.css";
// Components
import SearchForm from "./components/SearchForm";
import PokemonDisplay from "./components/PokemonDisplay";
import StatsChart from "./components/StatsChart";
import ErrorScreen from "./components/ErrorScreen";
import LoadingScreen from "./components/LoadingScreen";
// API/Data
import getPokemonByName from "./api";
import dummyPikachu from "./data/dummyPikachu";
import PokemonNav from "./components/PokemonNavigator";

function App() {
  // const [pokemon, setPokemon] = useState(dummyPikachu);
  const [pokemon, setPokemon] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const maxPokemonId = 1025;

  useEffect(() => {
    getPokemon("pikachu");
  }, []);

  async function getPokemon(name) {
    setLoading(true);
    setError(null);

    try {
      const res = await getPokemonByName(name);
      setPokemon(res.data);
    } catch (err) {
      console.error(err);
      setError("Pokémon does not exist...?");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    if (!searchTerm) {
      return null;
    }

    getPokemon(searchTerm);
  }

  return (
    <div className="app-container">
      <h1>Pokédex</h1>

      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        setError={setError}
      />

      <PokemonNav
        currentId={pokemon.id}
        onPrev={() => {
          const prevId = pokemon.id <= 1 ? maxPokemonId : pokemon.id - 1;
          getPokemon((prevId).toString());
        }}
        onNext={() => {
          const nextId = pokemon.id >= maxPokemonId ? 1 : pokemon.id + 1;
          getPokemon(nextId.toString());
        }}
        onRandom={() => {
          const randomId = Math.floor(Math.random() * 1025) + 1;
          getPokemon(randomId.toString());
        }}
      />

      {loading ? (
        <LoadingScreen />
      ) : error ? (
        <ErrorScreen errorMessage={error} />
      ) : (
        <>
          <PokemonDisplay pokemon={pokemon} />
          <StatsChart stats={pokemon.stats} />
        </>
      )}
    </div>
  );
}

export default App;
