import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeHolderHome from '../Assets/sampHome2.png';
import { MdElectricBolt } from "react-icons/md";
import { PiGasCanLight } from "react-icons/pi";

function OwnedHome(props) {
  console.log(props.property.utilityStatus);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
      <Card.Img variant="top" src={placeHolderHome}/>
      </Card.Header>
      <Card.Body>
        <Card.Title><span style = {{fontWeight:'bold'}}>{props.property.propertyName}</span></Card.Title>
          <Card.Text>
            {props.property.description}
          </Card.Text>
          <Card.Text>
            <span style = {{fontWeight:'bold'}}>{props.property.location}</span>
          </Card.Text>
        </Card.Body>

        
        <Card.Footer>
          <div style = {{float:'right'}}>
            <Button variant="success">
              < PiGasCanLight />
              {'  '}
              Gas Bill
              </Button>
              {'  '}
            <Button variant="warning">
              < MdElectricBolt />
              {'  '}
              Electric Bill
            </Button>
          </div>
        </ Card.Footer>
    </Card>
  );
}

export default OwnedHome;