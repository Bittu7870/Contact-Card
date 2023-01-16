import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar imgUrl={props.imgUrl}/>
            </div>
            <div className="bottom">
                <Details Details={props.phone} />
                <Details Details={props.email} />
            </div>
        </div>
    )
}
export default Card;