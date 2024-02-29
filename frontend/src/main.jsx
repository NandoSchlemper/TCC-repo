import ReactDOM from 'react-dom';
import React from 'react';
import Tick from './pages/timer.jsx';
import PokemonSearch from './pages/formularioPokemon.jsx';
import './style/timer/timer.css'


function App() {
    return (
        <div>
            <h1>Pokemon Search</h1>
            <PokemonSearch />
            <Tick />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);