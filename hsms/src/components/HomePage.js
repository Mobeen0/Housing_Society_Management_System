import HomeComponent from './HomeComponent';
import communityImg from '../Assets/community.jpg';
import gymImg from '../Assets/gym.jpg';
import infraImg from '../Assets/infrastructure.jpg';
import maintenanceImg from '../Assets/maintenance.png';
import parkImg from '../Assets/park.jpg';
import schoolImg from '../Assets/school.jpg';
import descriptions from '../config/imageDescription';

function HomePage(props){
    

    return(
        <div>


            <HomeComponent
            heading = 'Welcome to Our Lively Community'
            imageSrc={communityImg}
            description= {descriptions[0]}
            imageOnLeft={true}
            />

            
            <HomeComponent
            heading = 'Explore Our Modern Infrastructure'
            imageSrc={infraImg}
            description={descriptions[1]}
            imageOnLeft={false}
            />
            

            <HomeComponent
            heading = 'Embrace Fitness in Our State-of-the-Art Gym'
            imageSrc={gymImg}
            description= {descriptions[2]}
            imageOnLeft={true}
            />

            
            <HomeComponent
            heading = 'Discover Tranquility in Our Serene Park'
            imageSrc={parkImg}
            description={descriptions[3]}
            imageOnLeft={false}
            />


            <HomeComponent
            heading = 'Empower Young Minds in Our Educational Haven'
            imageSrc={schoolImg}
            description= {descriptions[4]}
            imageOnLeft={true}
            />

            
            <HomeComponent
            heading = 'Efficiency and Excellence: Our Commitment to Maintenance'
            imageSrc={maintenanceImg}
            description={descriptions[5]}
            imageOnLeft={false}
            />
        </div>
    );
}

export default HomePage;