import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import styled from 'styled-components';
import axios from 'axios';

const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

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
        <CardContainer>
            {location.map((item, index) => {
                return (
                    <LocationCard item={item} key={index} />
                )
            })}
        </CardContainer>
    )
}
