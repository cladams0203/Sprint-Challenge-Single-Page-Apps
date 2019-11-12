import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import { Search } from './Search';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/` )
      .then(response => {
        setCharacter(response.data.results)
      })
      .catch(err => console.log(err))
        
  }, []);
  

  return (
    <section className="character-list grid-view">
      <Search character={character} setCharacter={setCharacter}/>
      {character.map((item, index) => {
        return(
        <CharacterCard item={item} key={index} />
        )
      })}
    </section>
  );
}
