import { Container, Row, Col, Button } from "react-bootstrap";

const FeaturesSection = () => {
  return (
    <Container className="py-2 mb-3 container">
      <div
        style={{ textAlign: "center", marginBottom: "2em", fontSize: "14px" }}
      >
        <h2 className="fs-1 fw-bold">Our Features</h2>
        <p className="text-muted">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque <br /> laudantium totam rem ab illo inventore.
        </p>
      </div>
      <Row className="align-items-center ">
        {/* Left Side: Text + Button */}
        <Col md={6} className="text-center text-md-start">
          <h1 className="mb-4">Perfect Solution For Small Businesses</h1>
          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis.
          </p>
          <Button variant="primary" size="lg" className="mb-3">
            Find out more <i class="fa-thin fa-right-long"></i>
          </Button>
        </Col>

        {/* Right Side: Image */}
        <Col md={6} className="text-center">
          <img
            src="http://qexal.react.themesbrand.com/static/media/features-1.4a4e437de3430b09d0d7.jpg"
            alt="Sample"
            className="img-fluid rounded"
          />
        </Col>

        {/* Left Side: Image */}
        <Col md={6} className="text-center " style={{ marginTop: "1rem" }}>
          <img
            src="http://qexal.react.themesbrand.com/static/media/features-2.ecafb1c20fdd1737ae62.jpg"
            alt="Seen"
            className="img-fluid rounded"
          />
        </Col>

        {/* Right Side: Text + Button */}
        <Col md={6} className="text-center text-md-start ">
          <h5 className="mb-2 fs-2 fw-semibold">
            Build community & conversion with our suite of social tool
          </h5>
          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis.
          </p>
          <Button variant="primary" size="lg" className="mb-3">
            Find out more <i class="fa-thin fa-right-long"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;
