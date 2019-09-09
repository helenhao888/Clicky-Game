import React from "react";
import "./style.css";

function Score (props){
 console.log("score props",props);
        return (
            <div className="scoreBoard right">
               
                <h4 {...props}>Score: {props.currentScore}</h4>
                <h4> | </h4>
                <h4> Top Score: {props.topScore}</h4>
            </div>
        )
    
}

export default Score;