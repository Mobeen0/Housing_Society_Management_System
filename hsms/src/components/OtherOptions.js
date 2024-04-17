import {useRef,useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import { MdSwitchAccount,MdDriveFileRenameOutline  } from "react-icons/md";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiSolidRename } from "react-icons/bi";
import { TbPasswordUser } from "react-icons/tb";
import { FaSignInAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import ProgressBar from 'react-bootstrap/ProgressBar';


function OtherOptions(props) {
    const clickGuest = ()=>{
        let guestID = Math.floor(Math.random()*1000 + 1);
        guestID = 'Guest'+guestID.toString();
        props.guestLogin(true,guestID);
    }


    const [show, setShow] = useState(false);
    let [progNum,setProgNum] = useState(0);
    let [progColor,setProgColor] = useState('danger');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [fName,lName, nPass,cPass,uName,uEmail] = [useRef(''),useRef(''),useRef(''),useRef(''),useRef(''),useRef('')]

    function onFieldChange(){
        let counter = 0;
        if(fName.current.value!==''){
            counter+=1
        }
        if(lName.current.value!==''){
            counter+=1
        }
        if(nPass.current.value!==''){
            counter+=1
        }
        if(cPass.current.value!==''){
            counter+=1
        }
        if(uName.current.value!==''){
            counter+=1
        }
        if(uEmail.current.value!==''){
            counter+=1
        }
        setProgNum(Math.floor(counter * 100/6));
    }

    useEffect(()=>{
        if(progNum>45){
            setProgColor('warning');
        }
        if(progNum>80){
            setProgColor('success');
        }
        if(progNum<=45){
            setProgColor('danger');
        }
    },[progNum])

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <MdSwitchAccount />Register?
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as = {Link} to="/" onClick={handleShow}>Sign Up</Dropdown.Item>
                    <Dropdown.Item as = {Link} to="/LoggedIn/Home" onClick = {clickGuest}>Log in As Guest</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title><MdSwitchAccount /> Sign Up</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mb-3">
                        <MdDriveFileRenameOutline />
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" ref={fName} onChange = {onFieldChange} />
                    </div>
                    <div className="mb-3">
                        <MdDriveFileRenameOutline />
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" ref = {lName} onChange = {onFieldChange} />
                    </div>
                    <div className="mb-3">
                        <BiSolidRename />
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" ref = {uName} onChange = {onFieldChange}/>
                    </div>
                    <div className="mb-3">
                        <TfiEmail />
                        <label htmlFor="userEmail" className="form-label">email</label>
                        <input type="text" className="form-control" id="useEmail" ref = {uEmail} onChange = {onFieldChange} />
                    </div>
                    <div className="mb-3">
                        <TbPasswordUser />
                        <label htmlFor="newPassword" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="newPassword" ref= {nPass} onChange = {onFieldChange}/>
                    </div>
                    <div className="mb-3">
                        <TbPasswordUser />
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" ref = {cPass} onChange = {onFieldChange} />
                    </div>
                    <div className = "SignUpButtonDiv">
                        <Button variant= "outline-success" type = "submit" size = "lg" ><FaSignInAlt />{'  '}Sign Up</Button>
                    </div>
                    <div style = {{marginTop:'3vh'}}>
                        <ProgressBar striped variant={progColor} now={progNum} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
      </>
  );
}

export default OtherOptions;