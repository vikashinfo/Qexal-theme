import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function JoinCommunity() {
  return (
    <section
      className="text-center text-white py-3"
      style={{
        maxWidth: "900px",
        margin: "10px auto",

        background:
          "radial-gradient(ellipse at 10% 120%, #526dfb 0%, transparent 65%), linear-gradient(110deg, #5675fa, #b47bf5)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container className="py-2 position-relative">
        <h1 className="fw-semibold mb-4 fs-2">Join our Growing Community</h1>

        <p className="mx-auto mb-5 lh-lg" style={{ maxWidth: "650px" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <Button
          variant="light"
          className="text-primary rounded-1 px-4 py-3 rounded-pill"
        >
          sign Up for free
        </Button>
      </Container>
      <p id="contact"></p>
    </section>
  );
}

export default JoinCommunity;
