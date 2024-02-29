import React, { useState } from 'react';
import PokemonFetcher from './pokemonFetcher';

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    setPokemonName(event.target.value);
    setSubmit(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon Name:
          <input type="text" value={pokemonName} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {submit && <PokemonFetcher pokemonName={pokemonName} />}
    </div>
  );
}

export default PokemonSearch;
