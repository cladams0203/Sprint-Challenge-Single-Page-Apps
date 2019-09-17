import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
// import HomeDisplay from './components/HomeDisplay'

const HomeContainer = styled.div `
  display:flex;
  flex-direction: column;
  align-items: center;

`

export default function App() {
  
  return (
    <main>
      <Header />
      <TabNav />
      
      <Route exact path={`/`} component={HomeDisplay} />
      <Route path={`/characters`} component={CharacterList} />
      <Route path={`/locations`} component={LocationsList} />
      <Route path={`/episodes`} component={EpisodesList} />

    </main>
  );
}
function HomeDisplay() {

  const [home, setHome] = useState()
  console.log(home)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setHome(response.data.results[0])
    })
    .catch(err => console.log(err))
  }, [])
  
  
  
  return (
    
      <HomeContainer>
          {home !== undefined && <img src={home.image} alt={home.name} />}
          {home !== undefined && <h2>{home.name}</h2>}
          {home !== undefined && <p>{`${home.species} - ${home.status} `}</p> }
      </HomeContainer>
    
      
      
  );

}
