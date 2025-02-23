import { Carousel, Container } from 'react-bootstrap';
import '../styles/styles.css';

const CustomCarousel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img src="https://www.theknot.com/tk-media/images/496d0bfe-10eb-4746-ba30-72de40e9d3c7.jpg" alt="First slide" className='corouselImg'/>
          <Carousel.Caption>
            <h3>Florishh</h3>
            <p>Your cosmetic manufacturing partner.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.theknot.com/tk-media/images/496d0bfe-10eb-4746-ba30-72de40e9d3c7.jpg" alt="First slide" className='corouselImg'/>
          <Carousel.Caption>
            <h3>Florishh</h3>
            <p>Your cosmetic manufacturing partner.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ Container>
  );
};

export default CustomCarousel;