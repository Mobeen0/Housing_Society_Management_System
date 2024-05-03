import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import placeHolderHome from '../Assets/sampHome.png';
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaStopwatch } from "react-icons/fa";
import {useState} from 'react';
import axios from 'axios';


function PropertyInfo(props) {
  let [bClicked,setBClicked] = useState(false);
  let [rClicked,setRClicked] = useState(false);

  const handleBuy = ()=>{
    const buyRequest = async ()=>{
      try{
        const retVal = await axios.post(`http://localhost:5000/Login/Buy?uName=${props.uName}&propertyId=${props.property.propertyID}`);
        if(retVal.status===200){
          window.alert('Property Bought');
        }
        else{
          window.alert('other status sent');
        }
      }catch(error){
        window.alert('Error Occured');
      }
    }

    buyRequest();

    setBClicked(true);
    setRClicked(true);
  }

  const handleRent = ()=>{
    const RentRequest = async ()=>{
      try{
        const retVal = await axios.post(`http://localhost:5000/Login/Rent?uName=${props.uName}&propertyId=${props.property.propertyID}`);
        if(retVal.status===200){
          window.alert('Property Rented');
        }
        else{
          window.alert('other status sent');
        }
      }catch(error){
        window.alert('Error Occured');
      }
    }

    RentRequest();

    setBClicked(true);
    setRClicked(true);
  }

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
            <Button variant="success" disabled = {bClicked} onClick = {handleBuy}>
              < BiSolidPurchaseTag />
              {'  '}
              Buy
              </Button>
            {'  '}
            <Button variant="warning" disabled = {rClicked} onClick = {handleRent}>
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