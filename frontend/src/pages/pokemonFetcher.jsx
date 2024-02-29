import React, { useState, useEffect } from 'react';

function PokemonFetcher({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemonName) {
        setLoading(true);
        fetch(`http://127.0.0.1:5000/pokemon/${pokemonName}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                setPokemonData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
            setLoading(false);
            });
        }
        
    }, [pokemonName]); // Dependência do useEffect
    

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pokemonData) return <div>No Pokemon Data</div>;

  return (
    <div>
      <h2>{pokemonData.name}</h2>
    </div>
  );
}

export default PokemonFetcher;
