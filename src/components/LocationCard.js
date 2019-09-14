import React from "react";

export default function LocationCard(props) {
  const {name, type, dimension, residents} = props.item
  return (
    <div >
      <h2>{name}</h2>
      <p>{`${type} - ${dimension}`}</p>
      <p>{`Residents: ${residents.length}`}</p>
    </div>
  );
}
