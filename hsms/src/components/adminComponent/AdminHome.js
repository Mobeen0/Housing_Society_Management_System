import {useState} from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { IoIosHome, IoMdNotifications} from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { FaCircleArrowDown } from "react-icons/fa6";
import NotificationCanvas from './NotificationCanvas';
import {useNavigate} from 'react-router-dom';
import AddProperty from './AddProperty';
import axios from 'axios';


function AdminHome(props) {
  const history = useNavigate();
  let [noti,setNoti] = useState(false);
  const [addCanvas, setAddCanvas] = useState(false);
  const notiClick = () =>{
    setNoti(true);
  }
  const tenantsClick = () =>{
    const requestTenants = async () =>{
      try{
        const retVal = await axios.get(`http://localhost:5000/Admin/CheckTenants`)
        if(retVal){
            props.assignTenants(retVal.data);
            history('/LoggedIn/Admin/Tenants');
        }
      }
      catch(error){
  
      }
    }
    requestTenants();
  }

  const ownersClick = () =>{
    const requestOwner = async () =>{
      try{
        const retVal = await axios.get(`http://localhost:5000/Admin/CheckResidents`)
        if(retVal){
            props.assignOwners(retVal.data);
            history('/LoggedIn/Admin/Residents');
        }
      }
      catch(error){
  
      }
    }
    requestOwner();
  }
  const propClick = ()=>{
    setAddCanvas(true);
  }

  return (
    <>
    <h2 className = "prominent-heading">Admin Panel</h2>
        <Container fluid className="adminCont">
            <Row fluid className = "adminRowCont" >
                <Col>
                    <Button variant="primary" className="cloud-button" onClick = {propClick}>
                        <span style = {{marginBottom:'1px'}}><IoIosHome /></span>
                        {' '}
                        <span>List Property</span>
                    </Button>
                    <AddProperty showCanvas = {addCanvas} setShowCanvas = {setAddCanvas}/>
                </Col>
                <Col>
                    <Button variant="primary" className="cloud-button" onClick = {notiClick} >
                        <span style = {{marginBottom:'1px'}}><IoMdNotifications /></span>
                        {' '}
                        <span>Send Notification</span>
                    </Button>
                    <NotificationCanvas showStatus = {noti} statusFunc = {setNoti}/>
                </Col>
            </Row>
            <Row fluid className = "adminRowCont">
                <Col fluid>
                    <Button variant="primary" className="cloud-button" onClick = {ownersClick}>
                        <span style = {{marginBottom:'1px'}}><RiParentFill /></span>
                        {' '}
                        <span>Check Residents</span>
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" className="cloud-button" onClick = {tenantsClick}>
                        <span style = {{marginBottom:'1px'}}><FaCircleArrowDown /></span>
                        {' '}
                        <span>Check Tenants</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default AdminHome;
