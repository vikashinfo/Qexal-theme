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
                src="https://media.istockphoto.com/id/2258596110/photo/portrait-of-confident-mid-adult-businesswoman-against-white-background.jpg?s=612x612&w=0&k=20&c=VL9a5o8CqkismuRZeXs962ztSVabUTj5MZsnq3jQjGY="
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
                src="https://media.istockphoto.com/id/187067980/photo/determined-to-break-records.jpg?s=612x612&w=0&k=20&c=rYmAw2IFR4gs-Ey3PfgoxgzF-es6zp7_Asr6y3aKl9w="
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
                src="https://media.istockphoto.com/id/2216052190/photo/successful-confident-businesswoman-at-workplace-inside-office-woman-with-crossed-arms-smiling.jpg?s=612x612&w=0&k=20&c=HpGOecei3RJVh-cHDwMiOgubKpKzJy_63RVy-DdLhcA="
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
                src="https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ca1AFfPfzOPtHZdAwa7QtCD1TFDws7PG9t_rqSibdC0="
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
