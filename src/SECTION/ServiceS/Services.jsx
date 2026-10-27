import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

// Sample service data
const services = [
  {
    icon: <i class="fa-brands fa-artstation"></i>,
    title: "Digital Design",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
  },
  {
    icon: <i class="fa-solid fa-life-ring"></i>,
    title: "Awesome Support",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
  },

  {
    icon: <i class="fa-solid fa-sliders"></i>,
    title: "Easy to customize",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque.",
  },
];

function ServiceSction() {
  return (
    <section>
      <Container className="my-5 ">
        <div className="text-center mb-5">
          <h2>Our Services</h2>
          <span className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqueb <br /> laudantium totam rem ab illo
            inventore
          </span>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm text-center fs-5">
                <Card.Body>
                  <span>{service.icon}</span>
                  <Card.Title className="fs-3 mt-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.text}</Card.Text>
                  {/* <Card id="features"></Card> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <p id="features"></p>
      </Container>

      {/* section 2 */}
    </section>
  );
}

export default ServiceSction;
