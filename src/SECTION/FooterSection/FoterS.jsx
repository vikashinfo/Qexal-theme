import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer
      className=" text-white pt-5 pb-3"
      style={{
        background: "#01061f",
      }}
    >
      <Container>
        <Row className="g-4">
          {/* Logo and Description */}
          <Col lg={4} md={12}>
            <h4 className="fw-bold mb-3"> Qexal</h4>

            <p className="text-white-50 small pe-lg-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti.
            </p>
          </Col>

          {/* Customer */}
          <Col lg={1} md={3} xs={6}>
            <h6 className="fw-bold mb-3">Customer</h6>
            <ul className="list-unstyled">
              <li className="mb-3">Works</li>
              <li className="mb-3">Strategy</li>
              <li className="mb-3">Releases</li>
              <li className="mb-3">Press</li>
              <li className="mb-3">Mission</li>
            </ul>
          </Col>

          {/* Product */}
          <Col lg={1} md={3} xs={6}>
            <h6 className="fw-bold mb-3">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-3">Trending</li>
              <li className="mb-3">Popular</li>
              <li className="mb-3">Customers</li>
              <li className="mb-3">Features</li>
            </ul>
          </Col>

          {/* Information */}
          <Col lg={2} md={3} xs={6}>
            <h6 className="fw-bold mb-3">Information</h6>
            <ul className="list-unstyled">
              <li className="mb-3">Developers</li>
              <li className="mb-3">Support</li>
              <li className="mb-3">Customer Service</li>
              <li className="mb-3">Get Started</li>
              <li className="mb-3">Guide</li>
            </ul>
          </Col>

          {/* Support */}
          <Col lg={2} md={3} xs={6}>
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-3">FAQ</li>
              <li className="mb-3">Contact</li>
              <li className="mb-3">Discussion</li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center text-white-50 small mt-4">
          2026 &copy; Qexal. Develop By Vikas Themesbrand
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
