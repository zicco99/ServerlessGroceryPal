import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-body-tertiary">
        <Container>
          <p style={{ padding: "10px", margin: "0" }}>
            This is the footer content
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
