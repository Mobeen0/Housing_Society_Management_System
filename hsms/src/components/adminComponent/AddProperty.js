import { useState,useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FcOpenedFolder } from "react-icons/fc"

function AddProperty(props) {
    let [city,setCity] = useState('Add City')
    let nameRef = useRef(null);
    let descRef = useRef(null);
    let sizeRef = useRef(null);
    const handleClose = () => {
        props.setShowCanvas(false);
    }

    const handleSubmit= () =>{
      if(city === 'Add City'){
        window.alert('Please Select a valid City');
        return;
      }
      if(nameRef.current.value.trim().length ===0 || descRef.current.value.trim().length ===0){
        window.alert('Please fill in all fields');
        return;
      }
      const addProperty = async () =>{
        try{
            let retVal = await axios.post(`http://localhost:5000/Admin/AddProperty?pName=${nameRef.current.value}&pDesc=${descRef.current.value}&pSize=${sizeRef.current.value}&pCity=${city}`);
            const {status, data} = retVal;
            if(status ===200){
                window.alert('Property Added Successfully');
                handleClose();
            }
            else{
                window.alert(data);
            }
        }catch(error){
          window.alert('error occured');
        }
      }

      addProperty();
    }
    
  return (
    <>

      <Offcanvas show={props.showCanvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style = {{fontWeight:'bold'}}>Property Info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Property Name</label>
                <input type="text" className="form-control" ref = {nameRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Property Description</label>
                <textarea className="form-control" rows="5"  ref = {descRef}/>
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">Size</label>
              <input type="number" className="form-control" id="size" min="1" ref = {sizeRef} defaultValue="1"/>
            </div>
            <DropdownButton id="dropdown-basic-button" title={city}>
                <Dropdown.Item onClick = {()=>setCity('Islamabad')} >Islamabad</Dropdown.Item>
                <Dropdown.Item onClick = {()=>setCity('Lahore')}>Lahore</Dropdown.Item>
                <Dropdown.Item onClick = {()=>setCity('Karachi')}>Karachi</Dropdown.Item>
            </DropdownButton>
            <Button variant="success" className="mt-3" style = {{float:'right'}} onClick = {handleSubmit} > < FcOpenedFolder/> {' '}Enlist</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddProperty;