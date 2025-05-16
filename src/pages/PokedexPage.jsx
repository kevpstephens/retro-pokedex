// External Libraries
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Global Styles
import "/src/styles/App.css";
// Components
import {
  ErrorScreen,
  Header,
  HomeButton,
  LoadingScreen,
  PokemonDisplay,
  PokemonNav,
  SearchForm,
  StatsChart,
} from "../components";
// API/Data
import getPokemonByName from "../api/api";
import dummyPikachu from "../data/dummyPikachu";

function App() {
  // const [pokemon, setPokemon] = useState(dummyPikachu);
  const [pokemon, setPokemon] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const maxPokemonId = 1025;

  const { id } = useParams(); // gets the :id from the URL
  const navigate = useNavigate(); // we'll use this to navigate on button clicks

  useEffect(() => {
    if (!id) return;
    getPokemon(id);
  }, [id]);

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
    } else {
      navigate(`/pokedex/${searchTerm.toLocaleLowerCase()}`);
    }
  }

  return (
    <div className="app-container">
      <Header />
      <HomeButton />

      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        setError={setError}
      />

      <PokemonNav
        currentId={pokemon.id}
        onNext={() => {
          const nextId = pokemon.id >= maxPokemonId ? 1 : pokemon.id + 1;
          navigate(`/pokedex/${nextId}`);
        }}
        onPrev={() => {
          const prevId = pokemon.id <= 1 ? maxPokemonId : pokemon.id - 1;
          navigate(`/pokedex/${prevId}`);
        }}
        onRandom={() => {
          const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
          navigate(`/pokedex/${randomId}`);
        }}
        pokemon={pokemon}
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
