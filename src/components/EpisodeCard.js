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
  const {name, air_date, episode} = props.item
  return (
    <Card >
      <h2>{name}</h2>
      <p>{`Air Date: ${air_date}`}</p>
      <p>{`Episode: ${episode}`}</p>
    </Card>
  );
}
