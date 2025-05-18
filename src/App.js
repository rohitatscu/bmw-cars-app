import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from './components/CarCard';
import './styles/App.css';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/bmw/2025')
      .then(res => {
        const sortedCars =res.data.sort((a,b) =>
          a.Model_Name.localeCompare(b.Model_Name)
        );
        setCars(sortedCars);
      })
      .catch(err => console.error('Error fetching BMW data: ', err));
  }, []);
  

  return (
    <div className="App">
      <h1>2025 BMW Models</h1>
      <div className="car-list">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
