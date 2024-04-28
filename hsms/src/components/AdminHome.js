import {useState} from 'react';

import { Container, Row, Button, Col } from 'react-bootstrap';
import { IoIosHome, IoMdNotifications} from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { FaCircleArrowDown } from "react-icons/fa6";
import NotificationCanvas from './NotificationCanvas'


function AdminHome() {
  let [noti,setNoti] = useState(false);
  const notiClick = () =>{
    setNoti(true);
  }


  return (
    <Container fluid className="adminCont">
        <Row fluid className = "adminRowCont" >
            <Col>
                <Button variant="primary" className="cloud-button">
                    <span style = {{marginBottom:'1px'}}><IoIosHome /></span>
                    {' '}
                    <span>List Property</span>
                </Button>
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
                <Button variant="primary" className="cloud-button">
                    <span style = {{marginBottom:'1px'}}><RiParentFill /></span>
                    {' '}
                    <span>Check Owners</span>
                </Button>
            </Col>
            <Col>
                <Button variant="primary" className="cloud-button">
                    <span style = {{marginBottom:'1px'}}><FaCircleArrowDown /></span>
                    {' '}
                    <span>Check Tenants</span>
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default AdminHome;
