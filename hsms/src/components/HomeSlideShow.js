import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import descriptions from '../config/imageDescription';
import maintenanceImg from '../Assets/maintenance.png';
import parkImg from '../Assets/park.jpg';
import schoolImg from '../Assets/school.jpg';

function HomeSlideShow() {
  return (
    <Carousel interval = {2000} wrap ={true} data-bs-theme="dark" style = {{width:'80%', margin: '0 auto', marginTop: '2%'}}>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '560px' }}>
        <Image
          className="d-block w-100"
          src={parkImg}
          alt="First slide"
          style={{ opacity: 0.9 , filter: 'contrast(120%)'}}
        />
        </div>
        <Carousel.Caption>
          <h4 style = {{color:'white', fontWeight:'bold'}}><span style={{backgroundColor:'rgba(128, 128, 128, 0.8)'}}>Discover Tranquility in Our Serene Park</span></h4>
          <p style = {{color:'white', backgroundColor:'rgba(0, 0, 0, 0.6)'}}>{descriptions[3]}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '560px' }}>
        <Image
          className="d-block w-100"
          src={schoolImg}
          alt="Second slide"
          style={{ opacity: 0.9, filter: 'contrast(120%)' }}
        />
       </div>
        <Carousel.Caption>
          <h4 style = {{color:'white', fontWeight:'bold'}}><span style={{backgroundColor:'rgba(128, 128, 128, 0.8)'}}>Empower Young Minds in Our Educational Haven</span></h4>
          <p style = {{color:'white', backgroundColor:'rgba(0, 0, 0, 0.6)'}} >{descriptions[4]}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '560px' }}>
        <Image
          className="d-block w-100"
          src={maintenanceImg}
          alt="Third slide"
          style={{ opacity: 0.9, filter: 'contrast(120%)' }}
        />
       </div>
        <Carousel.Caption>
          <h4 style = {{color:'white', fontWeight:'bold'}}><span style={{backgroundColor:'rgba(128, 128, 128, 0.8)'}}>Efficiency and Excellence: Our Commitment to Maintenance</span></h4>
          <p style = {{color:'white', backgroundColor:'rgba(0, 0, 0, 0.6)'}}>
            {descriptions[5]}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlideShow;