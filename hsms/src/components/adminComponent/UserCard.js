import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import plcholder from '../../Assets/placeholderUser.png';

function UserCard(props) {
  return (
    <div style = {{justifySelf: 'center'}} >
    <Card style={{ width: '18rem'}} className = "user-card">
      <Card.Img variant="top" src= {plcholder}/>
      <Card.Body>
        <Card.Title>User Id: <span style = {{fontWeight:'bold'}}>{props.info.UserId} </span></Card.Title>
        <Card.Text>
          First Name: <span style = {{fontWeight:'bold'}}>{props.info.FName} </span>
          < br/>
          Last Name: <span style = {{fontWeight:'bold'}}> {props.info.LName} </span>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: <span style = {{fontWeight:'bold'}}> {props.info.email}</span></ListGroup.Item>
        <ListGroup.Item>UserName: <span style = {{fontWeight:'bold'}}>{props.info.UName}</span></ListGroup.Item>
        <ListGroup.Item>Password: <span style = {{fontWeight:'bold'}}>{props.info.password}</span></ListGroup.Item>
      </ListGroup>
    </Card>
  </div>
  );
}

export default UserCard;