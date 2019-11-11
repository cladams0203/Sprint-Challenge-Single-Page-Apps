import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
import { Search } from './components/Search';
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
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setHome(response.data.results)
    })
    .catch(err => console.log(err))
  }, [])
  
  
  
  return (
    
      <HomeContainer>
          {home !== undefined && <img src={home[0].image} alt={home[0].name} />}
          {home !== undefined && <h2>{home[0].name}</h2>}
          {home !== undefined && <p>{`${home[0].species} - ${home[0].status} `}</p> }
          {/* {home !== undefined && <Search home={home} setHome={setHome} />} */}
      </HomeContainer>
    
      
      
  );

}
