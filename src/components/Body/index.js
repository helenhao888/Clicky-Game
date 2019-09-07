import React from "react";
import "./style.css";


function Body(){
    return(
        <div className = "bodyContainer">
             {/* <img src={process.env.PUBLIC_URL + '/bodyBackground.jpg'} />  */}
        <h1>Clicky Game</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    )
};

export default Body;