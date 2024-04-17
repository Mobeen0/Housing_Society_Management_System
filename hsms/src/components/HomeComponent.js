import { Container, Row, Col, Image } from 'react-bootstrap';

function HomeComponent(props) {
  return (
    <Container style={{ marginTop: '10vh' }}>
      <Row className="align-items-center">
        <Col xs={12} md={6} className={props.imageOnLeft ? '' : 'order-md-last'}>
          <div style={{ textAlign: 'center' }}>
            <h2><b>{props.heading}</b></h2>
            <br />
            {props.description.split('\n').map((line, index) => (
              <p key={index} style = {{textAlign:'justify'}}>{line}</p>
            ))}
          </div>
        </Col>
        <Col xs={12} md={6} className={props.imageOnLeft ? 'order-md-last' : ''}>
          <div className = "homeImage" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image src={props.imageSrc} fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
