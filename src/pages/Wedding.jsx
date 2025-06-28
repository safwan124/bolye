import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import '../styles/styles.css'; // Optional if you need minimal custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const WeddingData = [
    {
      id: 1,
      name: "Haldi Decoration Setup",
      price: "₹4,999",
      rating: 95,
      imageUrl: "https://cheetah.cherishx.com/uploads/1678777100_original.jpg"
    },
    {
      id: 2,
      name: "Wedding Mandap Decor",
      price: "₹14,999",
      rating: 182,
      imageUrl: "https://couturierevents.com/wp-content/uploads/2023/07/e31af369a6f6284967d5cc89833eb29d.jpg"
    },
    {
      id: 3,
      name: "Reception Stage Decor",
      price: "₹11,500",
      rating: 142,
      imageUrl: "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg"
    },
    {
      id: 4,
      name: "Ring Ceremony Stage",
      price: "₹8,999",
      rating: 78,
      imageUrl: "https://i0.wp.com/chintupartyandevents.in/wp-content/uploads/2024/01/Stylish-Flower-Decorations-For-Engagement-Ceremony.jpg?fit=1000%2C1000&ssl=1"
    },
    {
      id: 5,
      name: "Pattern Stage Backdrop",
      price: "₹9,750",
      rating: 122,
      imageUrl: "https://s.alicdn.com/@sc04/kf/H22362926d2ea4ae881807b4c432e4d23K.jpg_300x300.jpg"
    },
    {
      id: 6,
      name: "Traditional Flower Entrance",
      price: "₹3,999",
      rating: 98,
      imageUrl: "https://images.prismic.io/eventsgyani/5b65da2b-b2e3-4cbf-8a10-c33a06e6fe46_9.+marigold+wedding+decor.jpg?auto=compress,format&rect=0,0,2000,1181&w=740&h=437"
    },
    {
      id: 7,
      name: "Bride Entry Pathway",
      price: "₹5,500",
      rating: 135,
      imageUrl: "https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2018/10/Decor-By-Altair.jpg"
    },
    {
      id: 8,
      name: "Mehndi Seating Decor",
      price: "₹6,200",
      rating: 76,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5IcvY_QJin0ysUgC14AuKR66qyiEwN_nWO0_-sozq6G57YrTA5qmpW9Qpdbs9Aw3cFY&usqp=CAU"
    },
    {
      id: 9,
      name: "Sangeet LED Stage Setup",
      price: "₹13,800",
      rating: 89,
      imageUrl: "https://svsolutionsusa.com/wp-content/uploads/2024/08/LED-Backdrop-for-Sangeet-in-Exeter-1024x585.jpg"
    },
    {
      id: 10,
      name: "Royal Wedding Throne Chairs",
      price: "₹4,500",
      rating: 65,
      imageUrl: "https://thronekingdom.com/cdn/shop/files/image_0822e4bf-b01b-43d5-975e-6c52cad0aaa9.jpg?v=1729574940&width=3024"
    },
    {
      id: 11,
      name: "Floral Photo Booth Wall",
      price: "₹3,850",
      rating: 109,
      imageUrl: "https://www.valarflowers.com/cdn/shop/files/B28A9663.jpg?v=1696214587&width=1500"
    },
    {
      id: 12,
      name: "Entrance Arch Garland Decor",
      price: "₹2,999",
      rating: 155,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQkdYxLaD4E3l3D6jReNC2hinGYt1xR8QeA&s"
    }
  ];
  
  const WedProducts = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState(null);
  
    const handleEnquireClick = (product) => {
      setSelectedProduct(product);
      setModalShow(true);
    };
  
    return (
      <Container className="my-4">
        <h2 className="text-center mb-4">Wedding Decors</h2>
        <Row>
          {WeddingData.map(wedding => (
            <Col lg={3} md={4} sm={6} key={wedding.id} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={wedding.imageUrl}
                  alt={wedding.name}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title>{wedding.name}</Card.Title>
                  {/* <Card.Text>{wedding.price}</Card.Text>
                  <Card.Text>{`Rating: ${wedding.rating}`}</Card.Text> */}
                  <Button
                    variant="primary"
                    className="w-100 mt-3"
                    onClick={() => handleEnquireClick(wedding)}
                  >
                    Enquire
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  
        {/* Show modal with selected product */}
        {selectedProduct && (
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            product={selectedProduct}
          />
        )}
      </Container>
    );
  };
  
  export default WedProducts;
  



  function MyVerticallyCenteredModal({ show, onHide, product }) {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enquire about: {product.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Call or WhatsApp:</strong> +91 6362785854</p>
          <p><strong>Follow us on:</strong>
           <a href="https://www.instagram.com/chandflowersanddecorations" className='mx-3'><FontAwesomeIcon icon={faInstagram} /></a> 
          <a href="https://www.youtube.com/@Syedvlogs_2030"><FontAwesomeIcon icon={faYoutube} /></a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          {/* <Button variant="primary">Submit Enquiry</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }  