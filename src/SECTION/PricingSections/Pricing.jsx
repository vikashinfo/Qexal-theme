import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Demonstrations from "../DemonsSection/DemonsSec";

function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "BASIC",
      icon: "◆",
      space: "50MB",
      support: "No",
      domain: "1",
      price: 9,
    },
    {
      name: "STANDARD",
      icon: "▰",
      space: "100MB",
      support: "Yes",
      domain: "1",
      price: 39,
      popular: true,
    },
    {
      name: "PREMIUM",
      icon: "▰",
      space: "200MB",
      support: "No",
      domain: "1",
      price: 79,
    },
  ];

  return (
    <>
      {/* Pricing section */}

      <section className="bg-white py-4">
        <Container>
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-2"
              style={{ fontSize: "2em", color: "#173253" }}
            >
              Pricing Plan
            </h2>

            <p
              className="mx-auto mb-0"
              style={{
                maxWidth: "600px",
                fontSize: "14px",
                lineHeight: 1.4,
                color: "#53647b",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem ab illo inventore.
            </p>
          </div>

          {/* Monthly / Yearly toggle */}
          <div className="d-flex justify-content-center mb-4">
            <div
              className="d-flex align-items-center rounded-pill p-1"
              style={{ background: "#f1f3f7" }}
            >
              <Button
                onClick={() => setYearly(false)}
                className="rounded-pill border-0 px-3 py-2"
                style={{
                  background: !yearly ? "#3055ff" : "transparent",
                  color: !yearly ? "white" : "#172b4d",
                  fontSize: "11px",
                }}
              >
                Monthly
              </Button>

              <Button
                onClick={() => setYearly(true)}
                className="rounded-pill border-0 px-3 py-2"
                style={{
                  background: yearly ? "#3055ff" : "transparent",
                  color: yearly ? "white" : "#172b4d",
                  fontSize: "14px",
                }}
              >
                Yearly
              </Button>
            </div>
          </div>

          {/* Pricing cards */}
          <Row className="g-3 justify-content-center">
            {plans.map((plan) => (
              <Col key={plan.name} xs={12} sm={10} md={4} lg={3}>
                <Card
                  className="h-100 border-0 rounded-2 text-center position-relative overflow-hidden"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,0.045)",
                    color: "#142e4d",
                  }}
                >
                  {/* Most popular ribbon */}
                  {plan.popular && (
                    <div
                      className="position-absolute text-white fw-bold"
                      style={{
                        top: "17px",
                        right: "-34px",
                        width: "135px",
                        background: "#3055ff",
                        transform: "rotate(45deg)",
                        fontSize: "9px",
                        padding: "5px 0",
                        zIndex: 2,
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}

                  <Card.Body className="d-flex flex-column align-items-center px-3 py-4">
                    {/* Icon */}
                    <div
                      className="d-flex align-items-center justify-content-center mb-4 rounded-1"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "#e6eaff",
                        color: "#3055ff",
                        fontSize: "1.5rem",
                      }}
                    >
                      {plan.name === "BASIC" ? (
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAaVBMVEVHcEwnU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/+YDEvRAAAAInRSTlMA/qhs+wEUBenzMn8M3N/Uery4Ps0bXSVFlMcjWE4LmW2KG26XRQAAARZJREFUWMPtltkOgjAQAKuUS+RUvC/2/z9SEjACZbvbkpiYdN6XBGbYVgiHw/EPbJMsS7bW46EXQUvkhVbj/i2FnvTmm8+f9jBgfzIc35QwodwYjF/XK1BYra/M8eAsYRZ5DljmYkCJSae9ORy904E5HI3TsTkcxKlqDmfG6aw5nKlT1BzO0KnWHO2UNEc4rVNYQFqLEhZRiXzZA3KRyCXzshDiaFbAuIZj12Bl+f7fHncX8/HLbtTi3fBj5nflVz5k/PHs4NssE3qpPArGTxEXD91CbYhHxA21WOunpiz5rBl7GS3r0w3jXKqIbmjUsibd0IzLUrthHO/fsua7YVwwXt0F4xVa31HasvTdMI7qQDgcjp/wBmEzotFx87KBAAAAAElFTkSuQmCC"
                          alt="baces"
                        />
                      ) : plan.name === "STANDARD" ? (
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEVHcEwnU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/9yjhT4AAAALnRSTlMAMl7U+/4BC9/ybBLHfxsGJAW3RHo/vOn22+hNp4opFs2dUJTqsY6tqViZcG9q4NPDMwAAAcVJREFUWMPtltmSgjAQRaMAsgkCqiCKG+Vu/v/zhhpRQ5LOAk8z5X2yLG5Cck83jdBX/16jseOMR53tsbfAtRZe3MluX3LcKL/Y+v50iwltU037YI4pzQca9snKwoys1UTRvjmYmCvzsFFKzsWgXGmmTXKwxJnaFwdL5cCZtpODBWTKJgeLkyk3OVh0pmBysMhMhcnJM5UmJ8l0k+MeykM0x72UIKPfAgYam3385rQm4Gx1tVvnJw2DpOP5PzzOAn17MGuxWGheplEwpTx01O3OkFfSkbdUsy+9CGpnU4WicKectlaEzQ9/nYnt2dpvHg0LMgPi/6uALPNK7tTkUCbUm4Fkvbj5nDUp6+1N9m74ZL25IW7bSlHOTYcl681NO+8cbQE+9i2yjD1AXIBSQ74T/GZGykGQOGszYEB381o4uldAz65vm0iH6vzVPQL7MpE3xAf9nfWPGUAcl9Ds6DM4h7vWFhbBPF0j5i7k1lJ5oqru8fspjx9UlZ5K5dHIGcYxHZJkWEqpoDOqOgP5uLYXNLcPkMIJE2pu/EbGWcCObhVrr26R1pTt6s5ntFpk8biR600WxI1cT7IE3KgM3VpD9ld/VT+hcjJYSW6A9QAAAABJRU5ErkJggg=="
                          alt="baces"
                        />
                      ) : (
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAqFBMVEVHcEwnU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/84ytu2AAAAN3RSTlMA3DISbP4jCwXpvKj3WUX0lHgW4Mf7fv0CXvHNgLQ8LkpA1tMdGU+LuNCIrSiOpJ2Zwm/l7wRnUy5TCAAAAlBJREFUWMOtl31fgjAQx4ckoAlgAhSWKYGllT239//OspJt3HaMp99ffIADtt/3jjtC6mTHi0Vsk65yzib0qMmZ0y3eNehJhtsh3FtSQUuvZfhoSoGmoxbh1vmYShqfWw3DL4KIKhUFFw3C7WufovKv7WbO4dJ4yp3DVeNp1TlciKeyc7gUniqdwwU9RZ3DJXpa65zeU61zGk8Lg/aQkZMp7aUHctfvARmJoz7x0bw1ASoaRg8d1895XIXtw8NVhcVty82828JkuLxaNA9fXF12KSb6omLPU314OleUtXV+OjDvZ/Xhs3vzdGu+ZuGbUDz/WkNW9Cq+Kdz8Hd7egC9DyeJVpFzrzS0hm0jeGzVZjBthtxOPZEp3NhJZp++FfmdkifBRJQs7T0PiZQihwpv4l0HmM0+BIFwrvjflg533CbbbcZrGmDuTd0fohVLgd1H6XfJRAD5S0DuZz1UEZ3uzcnkPLj+bEs75S1K555Mzb88/K5eSl1yZS0+PyqyTsvTxqXFrZLiOA3/5qmYpD1yCIOj7CJDEDSopvGPJuc1q/gIMyPWOpXZZRN5WuuImAPlWFpdjPL/hNzmVZAFuTgXgT3sibtH4YCFkCdxYBxHIHfi5RkGhIotzU4BWZEos4JLPEGRkcW7MPTDFKBSccAT/yWLcQCBZnkotzsf3FyOLcfP1/YG3rVKTJXeTEEjYOEulmJNVcqNr3aVGk5HFuNEND1Kr+0+WyI1ufIELTQ6ed0gaN9sDtPv9B44BRp4Bhq4Bxr4BBs8BRt8Bhu9m4/8PK3DanZbJLmYAAAAASUVORK5CYII="
                          alt="baces"
                        />
                      )}
                    </div>

                    <h3
                      className="mb-4"
                      style={{ fontSize: "16px", color: "#142e4d" }}
                    >
                      {plan.name}
                    </h3>

                    <div
                      className="d-flex flex-column gap-3 mb-2"
                      style={{ fontSize: "11px", color: "#53647b" }}
                    >
                      <div className="fs-5">
                        Onlinespace: <b className="text-dark">{plan.space}</b>
                      </div>
                      <div className="fs-5">
                        Support: <b className="text-dark">{plan.support}</b>
                      </div>
                      <div>
                        Domain <b className="text-dark ">{plan.domain}</b>
                      </div>
                      <div>All Extension Included</div>
                    </div>

                    {
                      <h4
                        className="mt-1 mb-3 text-dark"
                        style={{ fontSize: "1rem" }}
                      >
                        ${yearly ? plan.price * 5 : plan.price.toFixed(3)}
                        {" / "}
                        {yearly ? "Year" : "Month"}
                      </h4>
                    }

                    <Button
                      className="border-0 rounded-0 px-4 py-2 mt-auto"
                      style={{
                        background: plan.popular ? "#3055ff" : "#e8ecff",
                        color: plan.popular ? "#fff" : "#3055ff",
                        fontSize: "1em",
                        fontWeight: 600,
                      }}
                      onClick={() =>
                        alert(`You selected the ${plan.name} plan`)
                      }
                    >
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <p id="teams"></p>
        </Container>
      </section>
    </>
  );
}

export default PricingSection;
