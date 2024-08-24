import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet, useLocation } from 'react-router-dom';
import carImage from '../Images/car.png';
import mobileImage from '../Images/mobile.png';
import propertyImage from '../Images/Property1.jpg';
import propertyImage1 from '../Images/Property.jpg';
import electronicImage from '../Images/electronic.jpg';
import bikeImage from '../Images/bike.png';
import kidImage from '../Images/kid.png';
import serviceImage from '../Images/service.png';
import jobImage from '../Images/job.png';
import Mobiles from './Mobiles';
import Cars from './Cars';
import './Css/Home.css'; // Add this line to import the CSS file

const categories = [
  {
    id: 1,
    name: "Mobiles",
    image: mobileImage,
    link: "mobiles",
  },
  {
    id: 2,
    name: "Vehicles",
    image: carImage,
    link: "cars",
  },
  {
    id: 3,
    name: "Property For Sale",
    image: propertyImage,
    link: "/property-sale",
  },
  {
    id: 4,
    name: "Property For Rent",
    image: propertyImage1,
    link: "/property-rent",
  },
  {
    id: 5,
    name: "Electronics & Home Appliances",
    image: electronicImage,
    link: "/electronics",
  },
  {
    id: 6,
    name: "Bikes",
    image: bikeImage,
    link: "/bikes",
  },
  {
    id: 7,
    name: "Kids",
    image: kidImage,
    link: "/kids",
  },
  {
    id: 8,
    name: "Services",
    image: serviceImage,
    link: "/services",
  },
  {
    id: 9,
    name: "Jobs",
    image: jobImage,
    link: "/jobs",
  },
];

const CategoryCard = ({ category }) => {
  const categoryNameWords = category.name.split(' ');

  return (
    <Link to={category.link} className="category-button m-2 p-3">
      <img src={category.image} alt={category.name} width="80" height="80" />
      <div className="mt-3" style={{ textAlign: "center" }}>
        {categoryNameWords.map((word, index) => (
          <div key={index}><strong>{word}</strong></div>
        ))}
      </div>
    </Link>
  );
};

export default function Home({ showMobiles, showCars }) {
  const location = useLocation();
  const showMobilesPage = location.pathname.includes('mobiles') || showMobiles;
  const showCarsPage = location.pathname.includes('cars') || showCars;

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <h1 className="text-left mb-5">All Categories</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        {showMobilesPage && <Mobiles />}
        {showCarsPage && <Cars />}
      </Row>
      <Outlet />
    </Container>
  );
}
