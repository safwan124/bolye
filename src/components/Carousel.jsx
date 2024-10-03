import { Carousel, Container } from 'react-bootstrap';
import '../styles/styles.css';

const CustomCarousel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img src="https://t3.ftcdn.net/jpg/09/33/63/96/360_F_933639669_ELDRoZsmhAyYpRHai9mjMyMZjpvATRgf.jpg" alt="First slide" className='corouselImg'/>
          <Carousel.Caption>
            <h3>Boyle LifeSciences</h3>
            <p>Your cosmetic manufacturing partner.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://media.licdn.com/dms/image/C4E12AQFZ98VJXiE0pA/article-cover_image-shrink_600_2000/0/1620359424339?e=2147483647&v=beta&t=hQotCxnJj0xABsJWiR9zhZwsLfwgQ9JAxSg2W_3lYgg" alt="First slide" className='corouselImg'/>
          <Carousel.Caption>
            <h3>Boyle LifeSciences</h3>
            <p>Your cosmetic manufacturing partner.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ Container>
  );
};

export default CustomCarousel;