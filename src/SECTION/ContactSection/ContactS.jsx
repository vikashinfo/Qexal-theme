import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function ContactUS() {
  return (
    <Container fluid className="bg-white py-5 px-3 px-md-5">
      <Container className="py-lg-4">
        <Row className="align-items-center g-5">
          {/* Contact Form */}
          <Col lg={7} md={12}>
            <h2 className="fw-bold text-dark mb-3">Get in Touch</h2>

            <p className="text-secondary mb-4">
              Et harum quidem rerum facilis est expedita distinctio. Temporibus
              soluta nobis est eligendi optio cumque nihil impedit quo minus
              maxime.
            </p>

            <Form onSubmit={(e) => e.preventDefault()}>
              <Row className="g-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-secondary">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name*"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="text-secondary">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email*"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group>
                    <Form.Label className="text-secondary">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Subject"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group>
                    <Form.Label className="text-secondary">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter message"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="px-4"
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          {/* Contact Information */}
          <Col lg={5} md={12}>
            <div className="text-center mb-4">
              <Image
                src="https://cdn.pixabay.com/photo/2022/03/01/08/11/call-center-7040784_1280.png"
                alt="Customer support illustration"
                fluid
                className="w-100"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <i className="bi bi-envelope-fill text-primary fs-4"></i>
              <span className="text-secondary">vikascprinfo@gmail.com</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <i className="bi bi-telephone-fill text-primary fs-4"></i>
              <span className="text-secondary">+91 9060961701</span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
              <span className="text-secondary">
                2678 Edwards Street, Rocky Mount, NC 27804
              </span>
            </div>

            <div className="d-flex gap-4 mt-5">
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="bi bi-facebook text-primary fs-5"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="bi bi-linkedin text-primary fs-5"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="bi bi-instagram text-primary fs-5"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUS;
