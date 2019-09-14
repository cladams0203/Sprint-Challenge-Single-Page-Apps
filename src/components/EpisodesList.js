import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

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
        <div className='grid-view'>
            {episodes.map((item, index) => {
                return (
                    <EpisodeCard item={item} key={index} />
                )
            })}
        </div>
    )
}
