import PropertyInfo from './PropertyInfo';

function ShowProperties(props){
    return(
        <div className = "grid-container ">
            {props.listArr.map((item)=>(
                <PropertyInfo property={item}/>
            ))
            }
        </div>
    );
}

export default ShowProperties;