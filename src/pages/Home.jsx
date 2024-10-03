import React from 'react';
import { Container} from 'react-bootstrap';
import '../styles/styles.css';
import CustomCarousel from '../components/Carousel';
import AboutUs from './About';
import Shop from './Shop';
import Process from './Process';

const Home = () => {
  return (
    <Container className="mt-3">
      <CustomCarousel />
      <AboutUs />
      <Shop />
      <Process />
    </Container>
  );
};

export default Home;
