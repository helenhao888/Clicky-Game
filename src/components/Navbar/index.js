import React from "react";
import "./style.css"
import Score from "../Score";


function Navbar(props) {


  const displayMessage = () =>{
 
    switch(props.messagestatus){
        case "0":
            return <span >Click an image to begin!</span>;
           
        case "1":
            return <span >You guessed correctly!</span>
           
        case "2":
            return <span >You guessed incorrectly!</span>
            
        default:
            break;    
         }
  } ;

 

  return (
                     
      <nav className="navbar sticky-top  navbar-dark bg-dark">
          <a className="navbar-brand" href="#" onClick={props.resetgame}>
              <h1>Clicky Game</h1></a>
              
              <div className="center msgBox "> 
                   { displayMessage()}  
                    
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
