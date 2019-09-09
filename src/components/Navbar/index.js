import React from "react";
import "./style.css"
import Score from "../Score";

function Navbar(props) {


  const displayMsg = () =>{
      
    switch(props.messageStatus){
        case "0":
            return "Click an image to begin!";
            // break;
        case "1":
            return "Guessed correctly!"
            // break;
        case "2":
            return "Guessed incorrectly!"
            // break; 
        default:
            break;    
         }
  } ;

  return (
      <nav className="navbar sticky-top  navbar-dark bg-dark">
          {/* <a class="navbar-brand" href="#">Navbar w/ text</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button> */}
          {/* <div class="collapse navbar-collapse" id="navbarText"> */}
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">                     
                        <h1>Clicky Game</h1>
                  </li>
                  <li className="nav-item">
                  
                    {displayMsg()}  
                  </li>
                  {/* <li className="nav-item">
                      <Score />
                  </li> */}
              </ul>
              <Score currentStore = {props.currentScore}
                     topScore = {props.topScore}
               />
          {/* </div> */}
      </nav>
  );
}

export default Navbar;
