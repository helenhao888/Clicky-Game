import React from "react";
import "./style.css";

function Score (props){
    
        return (
            <div className="scoreBoard right">
               
                <h4 {...props}>Score: {props.currentscore}</h4>
                <h4> | </h4>
                <h4> Top Score: {props.topscore}</h4>
            </div>
        )
    
}

export default Score;