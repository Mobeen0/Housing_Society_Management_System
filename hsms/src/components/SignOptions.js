import {useRef,useState,useEffect} from 'react'
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
import {Link,useNavigate} from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa";
import axios from 'axios';
import { TbNumber0Small } from 'react-icons/tb';

function SignOptions(props) {
  const [validUser,setValidUser] =  useState(false);
  const [pathDirect, setPathDirect] = useState('/');
  let userVal = useRef();
  let passVal = useRef();
  let submitVal = useRef();
  const history = useNavigate();
  const handleSubmit = () =>{
    const verifyUser = async ()=>{
      try{
        const retVal = await axios.get(`http://localhost:5000/Login?userName=${userVal.current.value}&userPass=${passVal.current.value}`);
        if(retVal){
          const {status,data} = retVal
            if(status === 200){
              console.log(status)
              setValidUser(true)
              props.verifyLogin(true,userVal.current.value);
            }
            else{
              window.alert('The username or password is incorrect.');
              console.log(status);
            }
         }
        return retVal;
      }
      catch(error){
        window.alert('Error retrieving from database. Please try again!');
        console.log(error);
        return null;
      }
    }

    verifyUser();
    
  }
  
  useEffect(() => {
    if (validUser) {
      setPathDirect('/LoggedIn/Home');
      history('/LoggedIn/Home');
    }
  }, [validUser]);
  

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
              <Button type="submit" as = {Link}  to = {'/'} ref = {submitVal} onClick = {handleSubmit} > <CiLogin /> Log In</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </Navbar>
    </>
  );
}

export default SignOptions;