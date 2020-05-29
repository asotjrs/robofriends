// eslint-disable-next-line no-unused-vars
import React from "react";

const Card=({name, email, id})=>{
    return (
        <div className={"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"}>
            <h1> Robofriends</h1>
            <img src={"https://robohash.org/${"+id+"}?200x200"} alt={"robots"}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default Card;