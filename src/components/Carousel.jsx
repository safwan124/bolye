import { Carousel, Col, Container, Row } from 'react-bootstrap';
import '../styles/styles.css';

const CustomCarousel = () => {
  return (
    <Container>
        <Carousel controls={false} indicators={false} interval={1000}>
            <Carousel.Item>
              <img
                src="Pink_PurpleRosesLuxuryBouquet2400-4-removebg-preview.png"
                alt="First slide"
                className="corouselImg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="image-removebg-preview (2).png"
                alt="Second slide"
                className="corouselImg"
              />
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                src="03cb6269ce05adbcb353184826115f18ce2843c3-removebg-preview.png"
                alt="Second slide"
                className="corouselImg"
              />
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                src="romantic-wedding-chair-decoration-with-floral-garland-removebg-preview.png"
                alt="Second slide"
                className="corouselImg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="Garland2-removebg-preview.png"
                alt="Second slide"
                className="corouselImg"
              />
            </Carousel.Item>
          </Carousel>
     </ Container>
  );
};

export default CustomCarousel;