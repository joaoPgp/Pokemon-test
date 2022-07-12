import Header from "./components/Header";
import Main from './components/Main'
import PokemonList from "./components/PokemonList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="pokemons" element={<PokemonList />} />
      </Routes>
    </div>
  );
}

export default App;