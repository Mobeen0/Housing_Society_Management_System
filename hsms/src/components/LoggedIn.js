import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaHouseUser } from "react-icons/fa";

function LoggedIn(props) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand > <FaHouseUser /> MHH Housing Society</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <p className = "loggedName">{props.uname} </p>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoggedIn;