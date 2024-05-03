import { Table } from 'react-bootstrap';
import UserCard from  './UserCard';

function CheckTenant(props){

    return(
    <div className="grid-container">
    {
      props.tenants.map((tenan)=>(
        <UserCard info = {tenan} />
      ))
    }

    </div>
    );
}

export default CheckTenant;