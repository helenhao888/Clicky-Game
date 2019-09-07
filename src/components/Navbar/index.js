import React from "react";
import "./style.css"
import Score from "../Score";

function Navbar(props) {
  return (
      <nav className="navbar sticky-top  navbar-dark bg-dark">
          {/* <a class="navbar-brand" href="#">Navbar w/ text</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button> */}
          {/* <div class="collapse navbar-collapse" id="navbarText"> */}
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <a className="nav-link" href="#">
                          <h1>Clicky Game</h1></a>
                  </li>
                  <li className="nav-item">
                      <span>Click an image to begin!</span>
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
