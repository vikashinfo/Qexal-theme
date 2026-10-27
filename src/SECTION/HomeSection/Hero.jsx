import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <Container fluid className="py-5 bg-primary">
        <Row
          className="align-items-center"
          style={{ minHeight: "80vh", maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Left Side: Text + Button */}
          <Col md={6} className="text-center text-md-start">
            {/* <span className="mb-4  fs-1 fw-bold">
            Optimize Your Service Business
          </span> */}
            <Card.Title className="mb-4 fs-1 fw-semibold text-light ">
              Optimize Your <br />
              Service Business
            </Card.Title>
            <p className="mb-4 fs-5 " style={{ color: "#ddd" }}>
              Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur aut
              fugit sed quia consequuntur magni dolores ratione voluptatem
              nesciunt
            </p>

            <Button
              className=" btn rounded-pill bg-body m-2 fw-semibold text-primary"
              variant="light"
              type="button"
            >
              Get Started
            </Button>

            <Button
              variant="outline-light"
              className="btn rounded-pill m-lg-3 fs-2 g-2"
            >
              <i class="fa-solid fa-circle-play"></i>
            </Button>

            <samp className="text-light fs-5 fw-normal">Watch The Video!</samp>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <img
              src="http://qexal.react.themesbrand.com/static/media/hero-1-img.fc99709bf09049723294.png"
              alt="Sample"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
        <p id="service"></p>
      </Container>
    </>
  );
};

export default HeroSection;
