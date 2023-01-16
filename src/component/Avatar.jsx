import React from "react";
function Avatar(props){
    return(
        <img 
             className="circle-img"
             src={props.imgUrl} 
             alt="Tom Cruise" 
         />
    )
}
export default Avatar;