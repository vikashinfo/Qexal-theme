import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Team.css";

function TeamCard() {
  return (
    <>
      <Container className="py-4 destination-section">
        <div
          className="text-center mb-4 "
          style={{ maxWidth: "650px", margin: "10px auto" }}
        >
          <h2 className="fw-bold text-primary">Our Team Members</h2>
          <p className="text-secondary">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem ab illo inventore
          </p>
        </div>

        {/* //////// */}
        <Row className="g-4 justify-content-center">
          <Col xs={10} sm={6} lg={3}>
            <Card className="place-card border-0 d-flex">
              <Card.Img
                src="http://qexal.react.themesbrand.com/static/media/1.271c781cd5d41a071889.jpg"
                alt="casrd"
              />

              <div className="place-overlay ">
                <div className="place-content d-flex gap-2">
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Card>
            <p className="text-center">
              Frances Thompson <br /> Developer
            </p>
          </Col>
          {/* 2card */}
          <Col xs={10} sm={6} lg={3}>
            <Card className="place-card border-0 d-flex">
              <Card.Img
                src="http://qexal.react.themesbrand.com/static/media/2.590a54cc9867854bbd8e.jpg"
                alt="casrd2"
              />

              <div className="place-overlay ">
                <div className="place-content d-flex gap-2">
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Card>
            <p className="text-center">
              John Jones <br />
              CEO
            </p>
          </Col>
          {/* 3card */}
          <Col xs={10} sm={6} lg={3}>
            <Card className="place-card border-0 d-flex">
              <Card.Img
                src="http://qexal.react.themesbrand.com/static/media/3.79a09cf6445efdab72e2.jpg"
                alt="casr3"
              />

              <div className="place-overlay ">
                <div className="place-content d-flex gap-2">
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Card>
            <p className="text-center">
              Della Hobbs <br />
              Designer
            </p>
          </Col>
          {/* 4card */}
          <Col xs={10} sm={6} lg={3}>
            <Card className="place-card border-0 d-flex">
              <Card.Img
                src="http://qexal.react.themesbrand.com/static/media/4.e1928138c01816dea9a4.jpg"
                alt="casrd4"
              />

              <div className="place-overlay ">
                <div className="place-content d-flex gap-2">
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </Card>
            <p className="text-center">
              Troy Jordon <br /> Developer
            </p>
          </Col>
          <p id="blog"></p>
        </Row>
      </Container>
    </>
  );
}
export default TeamCard;
