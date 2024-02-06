import React, { useState } from 'react';
import './App.css'

const BreastCancerForm = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const submitForm = () => {
   
    console.log('Image:', image);
    console.log('Name:', name);
    console.log('Age:', age);

   
  };

  const showEncouragement = () => {
    alert("Best of luck! Don't worry. You're not alone in this fight against breast cancer.");
  };

  return (
    <div>
      <h1>Breast Cancer Website</h1>

      <label htmlFor="imageInput">1. Choose an Image:</label>
      <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} /><br />

      <label htmlFor="nameInput">2. Enter Your Name:</label>
      <input type="text" id="nameInput" value={name} onChange={handleNameChange} /><br />

      <label htmlFor="ageInput">3. Enter Your Age:</label>
      <input type="number" id="ageInput" value={age} onChange={handleAgeChange} /><br />

      <button onClick={submitForm}>Submit</button>

      <button onClick={showEncouragement}>Best of Luck, Don't Worry</button>
    </div>
  );
};

export default BreastCancerForm;

