import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Optional if you need minimal custom styles

export const productData = [
  {
    id: 1,
    name: "Olaplex No. 4 Bond Maintenance Shampoo",
    price: "₹1700",
    rating: 2201,
    imageUrl: "https://i.pinimg.com/736x/72/35/d4/7235d4b32ad9cff8134be9bb4022a799.jpg"
  },
  {
    id: 2,
    name: "Olaplex No. 7 Bonding Oil",
    price: "₹3250",
    rating: 1752,
    imageUrl: "https://images.mamaearth.in/catalog/product/r/i/rice-hair-oil-with-ingredient_1.jpg?format=auto&height=600"
  },
  {
    id: 3,
    name: "Olaplex No. 5 Bond Maintenance Conditioner",
    price: "₹1700",
    rating: 1752,
    imageUrl: "https://theskinstory.in/cdn/shop/files/1_4f0f3348-86b7-4562-b1b3-16e4ffa58385.jpg?v=1703658349"
  },
  {
    id: 4,
    name: "Olaplex No. 3 Hair Perfector",
    price: "₹2300",
    rating: 3021,
    imageUrl: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//o/l/olaplex-hair-perfector-n-3-100ml_2.jpg"
  },
  {
    id: 5,
    name: "Olaplex No. 4 Bond Maintenance Shampoo",
    price: "₹1700",
    rating: 2201,
    imageUrl: "https://www.jiomart.com/images/product/original/rvsxnalh9i/grolet-sampoo-for-anti-hair-breakage-silicone-free-unisex-300-ml-product-images-orvsxnalh9i-p593929316-0-202209220301.jpg?im=Resize=(420,420)"
  },
  {
    id: 6,
    name: "Olaplex No. 7 Bonding Oil",
    price: "₹3250",
    rating: 1752,
    imageUrl: "https://images.mamaearth.in/catalog/product/r/i/rice-hair-oil-with-ingredient_1.jpg?format=auto&height=600"
  },
  {
    id: 7,
    name: "Olaplex No. 5 Bond Maintenance Conditioner",
    price: "₹1700",
    rating: 1752,
    imageUrl: "https://theskinstory.in/cdn/shop/files/1_4f0f3348-86b7-4562-b1b3-16e4ffa58385.jpg?v=1703658349"
  },
  {
    id: 8,
    name: "Olaplex No. 3 Hair Perfector",
    price: "₹2300",
    rating: 3021,
    imageUrl: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//o/l/olaplex-hair-perfector-n-3-100ml_2.jpg"
  },
  {
    id: 9,
    name: "Olaplex No. 4 Bond Maintenance Shampoo",
    price: "₹1700",
    rating: 2201,
    imageUrl: "https://www.jiomart.com/images/product/original/rvsxnalh9i/grolet-sampoo-for-anti-hair-breakage-silicone-free-unisex-300-ml-product-images-orvsxnalh9i-p593929316-0-202209220301.jpg?im=Resize=(420,420)"
  },
  {
    id: 10,
    name: "Olaplex No. 7 Bonding Oil",
    price: "₹3250",
    rating: 1752,
    imageUrl: "https://images.mamaearth.in/catalog/product/r/i/rice-hair-oil-with-ingredient_1.jpg?format=auto&height=600"
  },
  {
    id: 11,
    name: "Olaplex No. 5 Bond Maintenance Conditioner",
    price: "₹1700",
    rating: 1752,
    imageUrl: "https://theskinstory.in/cdn/shop/files/1_4f0f3348-86b7-4562-b1b3-16e4ffa58385.jpg?v=1703658349"
  },
  {
    id: 12,
    name: "Olaplex No. 3 Hair Perfector",
    price: "₹2300",
    rating: 3021,
    imageUrl: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//o/l/olaplex-hair-perfector-n-3-100ml_2.jpg"
  }
];

const Products = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">All Products</h2>
      <Row>
        {productData.map(product => (
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
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{`Rating: ${product.rating}`}</Card.Text>
                <Link to={`/shop-now/${product.id}`}>
                  <Button variant="primary" className="w-100">
                    Preview
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
