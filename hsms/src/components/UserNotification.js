import { Table } from 'react-bootstrap';

function UserNotification(props) {
  return (
    <div className="table-container">
      <Table striped bordered hover size="lg" className="table-width">
        <thead>
          <tr>
            <th className="heading-col">Heading</th>
            <th className="content-col">Content</th>
            <th className="date-col">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.notifications.map((noti) => (
            <tr key={noti.id}>
              <td className="heading-col">{noti.notiHeading}</td>
              <td className="content-col">{noti.notiContent}</td>
              <td className="date-col">{noti.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserNotification;