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
            return "Guessed correctly!"
           
        case "2":
            return "Guessed incorrectly!"
            
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
                  
              </ul>
              <Score currentscore = {props.currentscore}
                     topscore = {props.topscore}
                     messagestatus = {props.messagestatus}
               />
          {/* </div> */}
      </nav>
  );
}

export default Navbar;
