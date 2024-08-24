import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import Car1Image from '../Images/civic.jpg'; // Adjust the import path as per your folder structure
import Car2Image from '../Images/gli.jpg'; // Adjust the import path as per your folder structure
import Car3Image from '../Images/city.jpg'; // Adjust the import path as per your folder structure
import './Css/Cars.css';

const initialCarsData = [
  {
    id: 1,
    name: 'Honda Civic',
    price: '$25,000',
    image: Car1Image,
    description: 'Toyota Camry with low mileage and excellent and good condition.',
    city: 'Karachi',
    status: '1 day ago',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Corolla GLI',
    price: '$20,000',
    image: Car2Image,
    description: 'Honda Civic with fuel-efficient engine and modern features.',
    city: 'Lahore',
    status: '2 days ago',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Honda City',
    price: '$35,000',
    image: Car3Image,
    description: 'Ford Mustang GT with powerful V8 engine and sporty design.',
    city: 'Multan',
    status: '3 days ago',
    isFavorite: false
  },
  // Add more car data here
];

export default function Cars() {
  const [cars, setCars] = useState(initialCarsData);

  const toggleFavorite = (id) => {
    const updatedCars = cars.map(car => {
      if (car.id === id) {
        return { ...car, isFavorite: !car.isFavorite };
      }
      return car;
    });
    setCars(updatedCars);
  };

  const handleCardClick = (id) => {
    console.log(`Car with id ${id} clicked`);
    // Add your navigation or click handling logic here
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Latest Cars</h2>
        <a href="/" className="view-more-link" onClick={() => console.log('View More clicked')}>
          View More <FaArrowRight className="view-more-icon" />
        </a>
      </div>
      <Row>
        {cars.map(car => (
          <Col key={car.id} sm={12} md={6} lg={4} className="mb-4">
            <Card
              onClick={() => handleCardClick(car.id)}
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div className="card-img-container">
                <Card.Img
                  variant="top"
                  src={car.image}
                  className="card-img-top"
                  alt={car.name}
                />
              </div>
              <Card.Body className="card-body-custom">
                <Card.Title className="d-flex justify-content-between align-items-center">
                  {car.name}
                  <FaHeart
                    style={{ color: car.isFavorite ? 'red' : 'grey', cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(car.id);
                    }}
                  />
                </Card.Title>
                <Card.Text>{car.description}</Card.Text>
                <Card.Text>{car.city}</Card.Text>
                <Card.Text>{car.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
