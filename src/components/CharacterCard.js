import React from "react";

export default function CharacterCard(props) {

  return (
    <div>
      <img src={props.item.image} alt={props.item.name} />
      <h2>{props.item.name}</h2>
      <p>{`${props.item.species} : ${props.item.status}`}</p>
      <p>{`Location : ${props.item.location.name}`}</p>
      <p>{`Origin : ${props.item.origin.name}`}</p>
    </div>

  );
}
