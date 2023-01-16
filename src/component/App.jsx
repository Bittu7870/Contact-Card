import React from "react";
import Card from "./Card";
import contact from "../contact";
import Avatar from "./Avatar";

function createCard(contact){
    return(
        <Card 
            key = {contact.id}
            name = {contact.name}
            imgUrl = {contact.imgUrl}
            phone = {contact.phone}
            email = {contact.email}
        />
    )
}

function App(){ 
    return(
        <div>
            <h1 className="heading">Contact Card</h1>
            <Avatar 
                imgUrl="https://www.thelist.com/img/gallery/this-is-why-tom-cruise-and-katie-holmes-really-divorced/intro-1660117332.jpg"
            />

            {contact.map(createCard)}


            {/* <Card 
                name   = {Contact[0].name}
                imgUrl = {Contact[0].imgUrl}
                phone  = {Contact[0].phone}
                email  = {Contact[0].email}
            />
            <Card 
                name   = {Contact[1].name}
                imgUrl = {Contact[1].imgUrl}
                phone  = {Contact[1].phone}
                email  = {Contact[1].email}
            />
            <Card 
                name   = {Contact[3].name}
                imgUrl = {Contact[3].imgUrl}
                phone  = {Contact[3].phone}
                email  = {Contact[3].email}
            />
            <Card 
                name   = {Contact[4].name}
                imgUrl = {Contact[4].imgUrl}
                phone  = {Contact[4].phone}
                email  = {Contact[4].email}
            /> */}
        </div>
    )
}
export default App;