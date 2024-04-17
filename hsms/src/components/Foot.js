import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5" style = {{marginTop:'15vh'}}>
      <Container>
        <Row>
          <Col className="text-center">
            <Button variant="outline-light" className="m-1" href="#">
              <FaFacebook />
            </Button>
            <Button variant="outline-light" className="m-1" href="#">
              <FaTwitter />
            </Button>
            <Button variant="outline-light" className="m-1" href="#">
              <FaGoogle />
            </Button>
            <Button variant="outline-light" className="m-1" href="#">
              <FaInstagram />
            </Button>
            <Button variant="outline-light" className="m-1" href="#">
              <FaLinkedin />
            </Button>
            <Button variant="outline-light" className="m-1" href="#">
              <FaGithub />
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <form>
              <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4} className="text-center">
                  <p className="text-light mb-3">Sign up for our newsletter</p>
                  <input type="email" className="form-control mb-3" placeholder="Email address" />
                  <Button variant="outline-light" className="mb-3" type="submit">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p>
            Welcome to MHH Housing Society, where community and comfort converge. Nestled in the heart of Islamabad,
            our society offers modern living spaces designed to meet your lifestyle needs. With lush green surroundings, 
            state-of-the-art amenities, and a vibrant community atmosphere, MHH Housing Society is more than just a place to live—it's a place to call home.
            Experience the epitome of urban living with us.
            Discover the perfect blend of convenience and serenity at MHH Housing Society today.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">

        </Row>
      </Container>
      <div className="text-center text-light py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} MHH Housing Society
      </div>
    </footer>
  );
}

export default Footer;
