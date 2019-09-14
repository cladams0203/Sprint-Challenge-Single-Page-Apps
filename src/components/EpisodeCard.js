import React from "react";

export default function LocationCard(props) {
  const {name, air_date, episode} = props.item
  return (
    <div >
      <h2>{name}</h2>
      <p>{`Air Date: ${air_date}`}</p>
      <p>{`Episode: ${episode}`}</p>
    </div>
  );
}
