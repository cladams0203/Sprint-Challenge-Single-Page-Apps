import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {

    const [location, setLocation] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            setLocation(response.data.results)
        })
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div className='grid-view'>
            {location.map((item, index) => {
                return (
                    <LocationCard item={item} key={index} />
                )
            })}
        </div>
    )
}
