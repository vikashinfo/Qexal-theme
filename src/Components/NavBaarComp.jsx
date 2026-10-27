import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function AppNavbarCom() {
  return (
    <Navbar sticky="top" expand="lg" className="shadow-sm bg-primary ">
      <Container className="container">
        <Navbar.Brand href="#" className="fw-bold fs-3 text-light">
          Qexal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-lg-center gap-lg-3 fw-semibold ">
            <Nav.Link href="/" active>
              Home
            </Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>

            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricings">Pricing</Nav.Link>
            <Nav.Link href="#teams">Team</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>

          <Form className="d-flex ms-lg-3 mt-3 mt-lg-0 ">
            <Button
              className=" btn rounded-pill  "
              variant="info"
              type="button"
            >
              Buy Now
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbarCom;
