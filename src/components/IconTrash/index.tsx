import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const IconTrash = (props:any) => {
  
  return <FontAwesomeIcon icon={faTrash} style={{cursor:'pointer'}} onClick={props.clickReset}/>
} 