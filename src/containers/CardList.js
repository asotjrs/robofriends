import Card from "./Card";
import React from "react";

const CardList=({robots})=>{
    return (
        <div>
            {  robots.map(
             (user,i) => {
            return <Card key={robots[i].id} id={robots[i].id} email={robots[i].email} name={robots[i].name}/>;
        }
            )}
        </div>
    );

};
export default CardList;