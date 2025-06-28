import React from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Optional if you need minimal custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const productData = [
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
  },
  {
    id: 13,
    name: "Kids Theme Decoration",
    price: "₹3,999",
    rating: 104,
    imageUrl: "https://theballoonwala.com/cdn/shop/products/N1-transformed.jpg?v=1693397266"
  },
  {
    id: 14,
    name: "Balloon Arch Entrance",
    price: "₹2,500",
    rating: 88,
    imageUrl: "https://www.partyballoons-coventry.co.uk/wp-content/uploads/2021/11/Coventry-balloon-suppliers.jpg"
  },
  {
    id: 15,
    name: "Photo Booth Backdrop",
    price: "₹3,000",
    rating: 97,
    imageUrl: "https://www.brides.com/thmb/9IOlqZNvA3lcZiobxFVDEqzd6TM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/diy-photo-booth-draping-laura-memory-7691ff550c2544acac2d2e7af20d0e95.jpg"
  },
  {
    id: 16,
    name: "First Birthday Theme",
    price: "₹4,500",
    rating: 110,
    imageUrl: "https://lifeinmomjeans.com/wp-content/uploads/2023/07/735aa-limj-wild-one-party-photos-72.jpg?w=1024"
  },
  {
    id: 17,
    name: "Teen Birthday Setup",
    price: "₹5,200",
    rating: 69,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-TJ2AGZn0rQAesM-6L0-0tTwdXolCZ5Fqg&s"
  },
  {
    id: 18,
    name: "Custom LED Stage",
    price: "₹6,800",
    rating: 83,
    imageUrl: "https://sc04.alicdn.com/kf/H56b47a8640244173997d6d93c9c443450.jpg"
  },
  {
    id: 19,
    name: "Rose Bouquet - Red Passion",
    price: "₹799",
    rating: 127,
    imageUrl: "https://www.fnp.com/images/pr/l/v20221109185604/red-passion-rose-bouquet_2.jpg"
  },
  {
    id: 20,
    name: "Orchid Elegance Garland",
    price: "₹1,299",
    rating: 104,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/CI/DT/WQ/32786584/white-orchid-embedded-with-purple-flower-garland-500x500.jpg"
  },
  {
    id: 21,
    name: "Mixed Flower Bunch",
    price: "₹999",
    rating: 92,
    imageUrl: "https://www.kolkataonlineflorists.com/images/FLH567_big.webp"
  },
  {
    id: 22,
    name: "Tulip Love Basket",
    price: "₹1,499",
    rating: 88,
    imageUrl: "https://www.bunchesbaskets.jp/product_image/31.jpg"
  },
  {
    id: 23,
    name: "Marigold Traditional Garland",
    price: "₹349",
    rating: 145,
    imageUrl: "https://urliutsav.com/cdn/shop/files/IndianGarland-Marigold2.jpg?v=1739786223"
  },
  {
    id: 24,
    name: "Jasmine & Rose Garland",
    price: "₹899",
    rating: 98,
    imageUrl: "https://flowerfashionindia.com/wp-content/uploads/2022/02/jasmine-garlands.png"
  },
  {
    id: 25,
    name: "Grand Reception Stage Setup",
    price: "₹15,999",
    rating: 154,
    imageUrl: "https://cdn0.weddingwire.in/article/6077/original/1280/jpg/127706-flower-wedding-stage-decoration-1-the-wedding-experience.jpeg"
  },
  {
    id: 26,
    name: "Floral Ring Stage Decor",
    price: "₹9,999",
    rating: 129,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxeYndU2WM_6InuIvY1sgPo9HcWj49MF1ug&s"
  },
  {
    id: 27,
    name: "LED Sangeet Stage Styling",
    price: "₹12,500",
    rating: 110,
    imageUrl: "https://jballoondecorators.in/wp-content/uploads/2025/01/LED-Screen-Wall-1.png"
  },
  {
    id: 28,
    name: "Traditional Mandap Setup",
    price: "₹17,800",
    rating: 98,
    imageUrl: "https://www.hamaraevent.com/lib/js/kcfinder/upload/images/image1(53).jpg"
  },
  {
    id: 29,
    name: "Patterned Backdrop Styling",
    price: "₹8,000",
    rating: 134,
    imageUrl: "https://images.meesho.com/images/products/530187896/9tkrr_512.webp"
  },
  {
    id: 30,
    name: "Indoor Venue Floral Styling",
    price: "₹7,999",
    rating: 120,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12GDNBVtLlvNxd55_Q-4eHEy4oBnMuAwBGg&s"
  }
];

const Products = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleEnquireClick = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">All Products</h2>
      <Row>
        {productData.map((product) => (
          <Col lg={3} md={4} sm={6} key={product.id} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                {/* <Card.Text>{product.price}</Card.Text>
                <Card.Text>{`Rating: ${product.rating}`}</Card.Text> */}
                {/* <Link to={`/shop-now/${product.id}`}>
                  <Button variant="primary" className="w-100">
                    Preview
                  </Button>
                </Link> */}
                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  onClick={() => handleEnquireClick(product)}
                >
                  Enquire
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
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

export default Products;

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
          <a href="https://www.instagram.com/chandflowersanddecorations" className='mx-3'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/@Syedvlogs_2030">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
