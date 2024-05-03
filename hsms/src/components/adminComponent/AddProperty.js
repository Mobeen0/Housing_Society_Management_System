import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function AddProperty(props) {
    let [city,setCity] = useState('Add City')
    const handleClose = () => {
        props.setShowCanvas(false);
    }
    
  return (
    <>

      <Offcanvas show={props.showCanvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Property Info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Property Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Property Description</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Size</label>
                <input type="text" className="form-control" />
            </div>
            <DropdownButton id="dropdown-basic-button" title={city}>
                <Dropdown.Item onClick = {()=>setCity('Islamabad')} >Islamabad</Dropdown.Item>
                <Dropdown.Item onClick = {()=>setCity('Lahore')}>Lahore</Dropdown.Item>
                <Dropdown.Item onClick = {()=>setCity('Karachi')}>Karachi</Dropdown.Item>
            </DropdownButton>
            <Button variant="success" className="mt-3" style = {{float:'right'}}>Enlist</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddProperty;