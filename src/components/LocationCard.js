import React from "react";
import styled from 'styled-components';

const Card = styled.div `
    width: 40%;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 4px black;
`

export default function LocationCard(props) {
  const {name, type, dimension, residents} = props.item
  return (
    <Card >
      <h2>{name}</h2>
      <p>{`${type} - ${dimension}`}</p>
      <p>{`Residents: ${residents.length}`}</p>
    </Card>
  );
}
