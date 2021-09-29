import React, { useState } from "react";

function PlantCard({plant}) {
  const [button, setButton] = useState(true)

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {button ? (
        <button onClick={()=>setButton(!button)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>setButton(!button)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
