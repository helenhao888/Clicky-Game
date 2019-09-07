import React from "react";
import "./style.css";



function Card(props) {

   
    return(
        <div className="card">
            <div className="img-container">               
                <img id={props.id} alt={props.name} src={props.image} key={props.id}
                    onClick={() => props.changeCard(props.id)} className="change" />
                
            </div>            

        </div>
    )
    
}

export default Card;