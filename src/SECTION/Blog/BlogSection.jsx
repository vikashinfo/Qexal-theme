import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BlogSectons() {
  return (
    <Container className="my-5">
      <div
        className="text-center  mb-4"
        style={{ maxWidth: "630px", margin: "0 auto" }}
      >
        <h2 className="fw-bold">Our Blog</h2>
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem ab illo inventore.
        </span>
      </div>

      <Row className="g-4 ">
        <Col xs={12} sm={6} lg={4}>
          <Card className="h-100 shadow-sm border-0 mb-3">
            <Card.Body className="d-flex flex-column">
              <Button variant="light" className="mb-3 w-50 fs-6 text-primary">
                UI & UX Design
              </Button>
              <Card.Title className="fw-semibold">
                Step bt step to conduct usability testing
              </Card.Title>

              <Card.Text className="text-secondary">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit
              </Card.Text>
            </Card.Body>

            <div className="d-flex m-1 gap-2 ">
              <Card.Img
                style={{ width: "50px", height: "50px ", marginLeft: "20px" }}
                variant="top"
                src="https://media.istockphoto.com/id/2233679907/photo/focused-software-developer-working-on-laptop-with-code-displayed-on-screen-in-modern-office.jpg?s=612x612&w=0&k=20&c=zNM0j9K9SSMpejgdPVd4Lpdq1Tc9yXMrQVzvFEslER8="
                alt="cardw"
                className="img-fluid rounded-pill object-fit-cover"
              />

              <div>
                <span className="fw-bold fs-6">John Yeager</span>
                <p> Designer, New York</p>
              </div>
            </div>
          </Card>
        </Col>
        {/* 2 card */}
        <Col xs={12} sm={6} lg={4}>
          <Card className="h-100 shadow-sm border-0 mb-3">
            <Card.Body className="d-flex flex-column">
              <Button variant="light" className="mb-3 w-50 fs-6 text-primary">
                CEO
              </Button>
              <Card.Title className="fw-semibold">
                Increase conversion rate from ad to landing page
              </Card.Title>

              <Card.Text className="text-secondary">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit
              </Card.Text>
            </Card.Body>

            <div className="d-flex m-1 gap-2 ">
              <Card.Img
                style={{ width: "50px", height: "50px ", marginLeft: "20px" }}
                variant="top"
                src="https://media.istockphoto.com/id/638528982/photo/excited-entrepreneur-working-on-line.jpg?s=612x612&w=0&k=20&c=6CVwpO3vOXbmVQlef5dXDUIN5_g1NIR1gZLJF01t0Jo="
                alt="cardw"
                className="img-fluid rounded-pill object-fit-cover"
              />

              <div>
                <span className="fw-bold fs-6">Berneice Harris</span>
                <p> Designer, New York</p>
              </div>
            </div>
          </Card>
        </Col>
        {/* 3 card */}
        <Col xs={12} sm={6} lg={4}>
          <Card className="h-100 shadow-sm border-0 mb-3">
            <Card.Body className="d-flex flex-column">
              <Button variant="light" className="mb-3 w-50 fs-6 text-primary">
                Developer
              </Button>
              <Card.Title className="fw-semibold">
                Why small business should start marketing
              </Card.Title>

              <Card.Text className="text-secondary">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </Card.Text>
            </Card.Body>

            <div className="d-flex m-1 gap-2 ">
              <Card.Img
                style={{ width: "50px", height: "50px ", marginLeft: "20px" }}
                variant="top"
                src="https://media.istockphoto.com/id/2258596110/photo/portrait-of-confident-mid-adult-businesswoman-against-white-background.jpg?s=612x612&w=0&k=20&c=VL9a5o8CqkismuRZeXs962ztSVabUTj5MZsnq3jQjGY="
                className="img-fluid rounded-pill object-fit-cover"
              />

              <div>
                <span className="fw-bold fs-6">Sarah Pettway</span>
                <p> Designer, New York</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogSectons;
