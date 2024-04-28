import {Routes,Route,useParams} from 'react-router-dom';
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignOptions from './components/SignOptions'
import LoggedIn from './components/LoggedIn';
import Navigation from './components/Navigation'
import Foot from './components/Foot'
import HomePage from './components/HomePage';
import AdminHome from './components/AdminHome';
import './styleSheet/global.css'


function App() {

  const [logged,setLogged] = useState(false);
  const [admin,setAdmin] = useState(false);
  const [username,setUsername] = useState('');
  const { wildcardParam } = useParams();
  const logStateChange = (boolVal,newName,adminBool) => {
    setLogged(boolVal);
    setUsername(newName);
    setAdmin(adminBool);
  }

  return (
    <>
    <Routes>
      <Route path = "/" element = {
        <>
        <Container fluid className ="signCont">
          <SignOptions verifyLogin = {logStateChange} />
        </Container>
        </>
      } />
      <Route path = "/LoggedIn/:wildcardParam?" element = {
        <Container fluid>
          <LoggedIn uname = {username} />
        </Container>
      } />
    </Routes>
    {
      admin? null : <Navigation logStatus = {logged}/>
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
      <Route path = "/LoggedIn/About" />

      <Route path = "/LoggedIn/Admin" element = {
        <AdminHome />
      } />
    </Routes>

    <Foot />

    </>
    
  );
}

export default App;
