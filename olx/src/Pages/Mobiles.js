import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import Mobile1Image from '../Images/iphone2.jpg';
import IphoneImage from '../Images/Iphone.jpg';
import Iphone2Image from '../Images/vivo.jpg';
import './Css/Mobile.css'; 

const initialMobilesData = [
  {
    id: 1,
    name: 'iPhone 13 Pro Max',
    price: '$999',
    image: IphoneImage,
    description: 'Brand new iPhone 13 Pro Max with 128GB storage.',
    city: 'Karachi',
    status: '1 days ago',
    isFavorite: false
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: '$799',
    image: Mobile1Image,
    description: 'Samsung Galaxy S21 with 256GB storage.',
    city: 'Rawalpindi',
    status: '3 hours ago',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Vivo V20',
    price: '$799',
    image: Iphone2Image,
    description: 'Samsung Galaxy S21 with 256GB storage.',
    city: 'Islamabad',
    status: '4 hours ago',
    isFavorite: false
  },
  
];

export default function Mobiles() {
  const [mobiles, setMobiles] = useState(initialMobilesData);

  const toggleFavorite = (id) => {
    const updatedMobiles = mobiles.map(mobile => {
      if (mobile.id === id) {
        return { ...mobile, isFavorite: !mobile.isFavorite };
      }
      return mobile;
    });
    setMobiles(updatedMobiles);
  };

  const handleCardClick = (id) => {
    console.log(`Card with id ${id} clicked`);
    //navigation or click handling logic
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Latest Mobiles</h2>
        <a href="/" className="view-more-link" onClick={() => console.log('View More clicked')}>
          View More <FaArrowRight className="view-more-icon" />
        </a>
      </div>
      <Row>
        {mobiles.map(mobile => (
          <Col key={mobile.id} sm={12} md={6} lg={4} className="mb-4">
            <Card
              onClick={() => handleCardClick(mobile.id)}
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Card.Img variant="top" src={mobile.image} />
              <Card.Body className="card-body-custom">
                <Card.Title className="d-flex justify-content-between align-items-center">
                  {mobile.name}
                  <FaHeart
                    style={{ color: mobile.isFavorite ? 'red' : 'grey', cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(mobile.id);
                    }}
                  />
                </Card.Title>
                <Card.Text>{mobile.description}</Card.Text>
                <Card.Text>{mobile.city}</Card.Text>
                <Card.Text>{mobile.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
