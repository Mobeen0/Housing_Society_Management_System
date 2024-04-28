import { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

function NotificationCanvas(props) {

    let [value,setValue] = useState('User Types');
    let [headingRef, descRef] = [useRef(''),useRef('')];
    const handleClose = () => {
        props.statusFunc(false);
        setValue('User Types')
    }

    const handleClick = () =>{
        if(headingRef.current.value.trim().length=== 0 ||
            descRef.current.value.trim().length === 0 || value === 'User Types'){
            window.alert('Please fill in all fields');
            return;
        }
        
        const sendNoti = async () =>{
            try{
                let retVal = await axios.post(`http://localhost:5000/Admin/Notification?notiHeading=${headingRef.current.value}&notiContent=${descRef.current.value}&userType=${value}`);
                const {status, data} = retVal;
                if(status ===200){
                    window.alert('Notification sent successfully');
                    handleClose();
                }else{
                    window.alert('Please Choose Unique UserName and Email.');
                }
            }catch(error){  
                window.alert('error occured')
            }
        }

        sendNoti();
    }

    return (

        <>
        <Offcanvas show={props.showStatus} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title><span style = {{fontWeight:'bold', textAlign:'center'}}>Send Notification</span></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="mb-3">
                    
                    <label className="form-label">Notification Heading</label>
                    <input type="text" className="form-control" ref = {headingRef}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea type="text" className="form-control" ref= {descRef} />
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        {value}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick = {()=> setValue('Residents')}>Residents</Dropdown.Item>
                        <Dropdown.Item onClick = {()=> setValue('Tenants')}>Tenants</Dropdown.Item>
                        <Dropdown.Item onClick = {()=> setValue('Both')} >Both</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style = {{marginTop:'10vh', float:'right'}}>
                    <Button variant="success" onClick = {handleClick}>Send</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default NotificationCanvas;