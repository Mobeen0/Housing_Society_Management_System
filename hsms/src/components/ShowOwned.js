import OwnedHome from './OwnedHome';

function ShowOwned(props){
    return(
        <div className = "grid-container ">
            {props.listArr.map((item)=>(
                <OwnedHome property={item}/>
            ))
            }
        </div>
    );
}

export default ShowOwned;