import {useRef} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import OtherOptions from './OtherOptions';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import {Link} from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa";

function SignOptions(props) {
  let userVal = useRef();
  let passVal = useRef();
  let submitVal = useRef();

  const handleSubmit = () =>{
    props.verifyLogin(true,userVal.current.value);
  }

  return (
    <>
    <Navbar className="bg-body-tertiary justify-content-between">
      <Navbar className="bg-body-tertiary justify-content-start SignLogo">
        <Navbar.Brand > <FaHouseUser /> MHH Housing Society</Navbar.Brand>
        <Navbar.Brand >
          <Container fluid className = "otherOptionCont">
            <OtherOptions guestLogin = {props.verifyLogin} />
          </Container>
        </Navbar.Brand>
      </Navbar>
      <Navbar className="bg-body-tertiary justify-content-end subNavbar">
        <Form inline >
          <InputGroup>
            <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref = {userVal}
            />
          </InputGroup>
          </Form>
          <Form inline >
            <div>&nbsp;&nbsp;</div>
          </Form>
          <Form inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1"><PiPasswordBold /></InputGroup.Text>
            <Form.Control
              type ="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              ref = {passVal}
            />
          </InputGroup>
        </Form>
        <Form inline >
          <div>&nbsp;&nbsp;</div>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Button type="submit" as = {Link}  to = '/LoggedIn/Home' ref = {submitVal} onClick = {handleSubmit} > <CiLogin /> Log In</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </Navbar>
    </>
  );
}

export default SignOptions;