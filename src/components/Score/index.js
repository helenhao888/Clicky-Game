import React ,{Component} from "react";
import "./style.css";

class Score extends Component{

   state={
       currentScore:0,
       topScore:0
   }

    render(){
        return (
            <div className="scoreBoard right">

                <h4>Score: {this.state.currentScore}</h4>
                <h4> | </h4>
                <h4> Top Score: {this.state.topScore}</h4>
            </div>
        )
    }
}

export default Score;