import React from 'react';
import imageMap from '../data/imageMap';

const CarCard = ({ car }) => {
    const imageUrl = imageMap[car.Model_Name] || "https://bmw-car-app-daf13.web.app/images/default.jpg";
    return (
        <div className="car-card">
            <img 
                src ={imageUrl}
                alt={car.Model_Name}
                style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <h2>{car.Make_Name} {car.Model_Name}</h2>
        </div>
    );
};

export default CarCard;
