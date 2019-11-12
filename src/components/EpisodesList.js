import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import styled from 'styled-components'
import axios from 'axios';

const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

export default function EpisodesList() {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
            setEpisodes(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])
    
    return(
        <CardContainer>
            {episodes.map((item, index) => {
                return (
                    <EpisodeCard item={item} key={index} />
                )
            })}
        </CardContainer>
    )
}
