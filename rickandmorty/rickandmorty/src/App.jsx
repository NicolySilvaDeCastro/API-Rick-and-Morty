import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [initialCharacters, setInitialCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/');
        const data = await response.json();
        setInitialCharacters(data.results);
        setCharacters(data.results);

      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (!value) {
      setCharacters(initialCharacters);
      return;
    }
    const filteredCharacters = initialCharacters.filter(character =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className='app'>
      <div className='container-input'>
        <input type="text" onChange={handleChange} placeholder=" Procurar personagens" />
      </div>

      <div className='container-list'>
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <img src={character.image} alt={character.name}/>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
//Prof usei como referência esse vídeo: https://youtu.be/tcu938s1e_w?si=IJPa3dc2wLtRf0F6