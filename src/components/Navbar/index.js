import React from "react";
import "./style.css"
import Score from "../Score";

function Navbar(props) {


  const displayMsg = () =>{
      console.log("props",props);
    switch(props.messagestatus){
        case "0":
            return "Click an image to begin!";
           
        case "1":
            return "You guessed correctly!"
           
        case "2":
            return "You guessed incorrectly!"
            
        default:
            break;    
         }
  } ;

 

  return (
      <nav className="navbar sticky-top  navbar-dark bg-dark">
          <a className="navbar-brand" href="#" onClick={props.resetgame}>
              <h1>Clicky Game</h1></a>
              
              <div className="center msgBox ">
                  <span>{displayMsg()}</span>
              </div>
              <ul className="navbar-nav">    
                  <Score currentscore = {props.currentscore}
                     topscore = {props.topscore}
                     messagestatus = {props.messagestatus}
                     />
                  
              </ul>    
               
      </nav>

  );
}

export default Navbar;
