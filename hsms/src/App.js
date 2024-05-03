import {Routes,Route,useParams} from 'react-router-dom';
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignOptions from './components/SignOptions'
import LoggedIn from './components/LoggedIn';
import Navigation from './components/Navigation'
import Foot from './components/Foot'
import HomePage from './components/HomePage';
import AdminHome from './components/adminComponent/AdminHome';
import CheckTenant from './components/adminComponent/CheckUser';
import UserNotification from './components/UserNotification';
import './styleSheet/global.css'


function App() {

  const [logged,setLogged] = useState(false);
  const [admin,setAdmin] = useState(false);
  const [username,setUsername] = useState('');
  const [userT,setUserT] = useState('N');
  const [notis,setNotis] = useState([{}]);
  const [tenants, setTenants] = useState([{}]);
  const [owners, setOwners] = useState([{}]);
  // eslint-disable-next-line
  const { wildcardParam } = useParams();
  const logStateChange = (boolVal,newName,adminBool,userType) => {
    setLogged(boolVal);
    setUsername(newName);
    setAdmin(adminBool);
    setUserT(userType);
  }

  return (
    <div className = 'globalBackground'>
    <Routes>
      <Route path = "/" element = {
        <>
        <Container fluid className ="signCont">
          <SignOptions verifyLogin = {logStateChange} />
        </Container>
        </>
      } />
    </Routes>


    {
      logged? <Container fluid> <LoggedIn uname = {username} /></Container> : null
    }

    {
      admin? null : <Navigation logStatus = {logged} userType= {userT} assignNotis = {setNotis}/>
    }
    
    <Routes>
      <Route path = "/" element={
        <HomePage />
      }/>
      <Route path = "/LoggedIn/Home" element={
        <HomePage />
      }/>
      <Route path = "/LoggedIn/Listings" />
      <Route path = "/LoggedIn/Personal" />
      <Route path = "/LoggedIn/Contact" />
      <Route path = "/LoggedIn/Notifications" element = {
        <UserNotification notifications = {notis} />
      }/>

      <Route path = "/LoggedIn/Admin" element = {
        <AdminHome assignTenants= {setTenants} assignOwners = {setOwners} />
      } />
      <Route path = "/LoggedIn/Admin/Tenants" element = {
        <CheckTenant tenants = {tenants}/>
      } />
      <Route path = "/LoggedIn/Admin/Residents" element = {
        <CheckTenant tenants = {owners}/>
      } />
    </Routes>

    <Foot />

    </div>
    
  );
}

export default App;
