import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({newPlant, filter}) {
  const [plantsArray, setPlantsArray] = useState([])
  

  useEffect(()=>{
    setPlantsArray([...plantsArray, newPlant])
  }, [newPlant])

  useEffect(()=> {
    setPlantsArray(plantsArray.includes(filter))
  }, [filter])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data => {
      setPlantsArray([data])
    })
  }, [])
  return (
    <ul className="cards">
      {plantsArray.map(plant => <PlantCard key={plant.id} plant={plant} />)} 
      </ul>
  );
}

export default PlantList;
