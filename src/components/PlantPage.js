import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [newPlant, setNewPlant] = useState([])
  const [filter, setFilter] = useState("")

  return (
    <main>
      <NewPlantForm setNewPlant={setNewPlant} newPlant={newPlant}/>
      <Search setFilter={setFilter}/>
      <PlantList filter={filter} newPlant={newPlant}/>
    </main>
  );
}

export default PlantPage;
