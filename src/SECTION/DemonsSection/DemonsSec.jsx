import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Demonstrations() {
  return (
    <section
      className="text-center text-white py-5"
      style={{
        minHeight: "350px",
        background:
          "radial-gradient(ellipse at 10% 120%, #526dfb 0%, transparent 65%), linear-gradient(110deg, #5675fa, #b47bf5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container className="py-4 position-relative">
        <h1 className="fw-semibold mb-4 fs-2">
          Build your dream website today
        </h1>

        <p className="mx-auto mb-5 lh-lg" style={{ maxWidth: "800px" }}>
          Sed perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totamrem aperiam eaque inventore
          veritatis quasi.
        </p>

        <Button
          variant="light"
          className="text-primary rounded-1 px-4 py-3 fw-medium"
        >
          Ask for Demonstration
        </Button>

        <p id="pricings"></p>
      </Container>
    </section>
  );
}

export default Demonstrations;
