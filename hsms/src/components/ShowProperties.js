import PropertyInfo from './PropertyInfo';

function ShowProperties(props){

    const filteredList = props.listArr.filter((item) => {
        const filterContent = props.filterContent.toLowerCase().split(' ');
        return (
          (item.propertyName && filterContent.some(word => item.propertyName.toLowerCase().includes(word))) ||
          (item.location && filterContent.some(word => item.location.toLowerCase().includes(word))) ||
          (item.description && filterContent.some(word => item.description.toLowerCase().includes(word)))
        );
      });

    return(
        <div className = "grid-container ">
            {filteredList.map((item)=>(
                <PropertyInfo property={item} uName = {props.uName}/>
            ))
            }
        </div>
    );
}

export default ShowProperties;