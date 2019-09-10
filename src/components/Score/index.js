import React from "react";
import "./style.css";

function Score (props){
    
        return (
            <div className="scoreBoard">
               <li className="nav-item">
                    <h4 >Score: {props.currentscore}</h4>
                </li>
                {/* <h4> | </h4> */}
                <li className="nav-item">
                    <h4> Top Score: {props.topscore}</h4>
                </li>
            </div>
        )
    
}

export default Score;