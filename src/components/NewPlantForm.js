import React, { useState } from "react";

function NewPlantForm({setNewPlant}) {
  function submitHandler(e){
    e.preventDefault()
    setNewPlant(formData)
  }
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  })
  function handleChange(e){
    let value = e.target.value
    setFormData({...formData, [e.target.name]: value})
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image}type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
