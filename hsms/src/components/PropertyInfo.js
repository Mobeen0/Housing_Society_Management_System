import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeHolderHome from '../Assets/sampHome.png';
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaStopwatch } from "react-icons/fa";

function PropertyInfo(props) {
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
              < BiSolidPurchaseTag />
              {'  '}
              Buy
              </Button>
            {'  '}
            <Button variant="warning">
              < FaStopwatch />
              {'  '}
              Rent
              </Button>
            </div>
          </ Card.Footer>
    </Card>
  );
}

export default PropertyInfo;