import React, {Component} from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cards  from "./cards.json";
import Footer from "./components/Footer";

class App extends Component{

    state = {
        cards,
        guessedIds:[],
        currentscore:0,
        topscore:0,
        messagestatus:"0",
        //"0" -- initial message, "1"-- guessed correctly, "2"--guessed incorrectly
        animating:false
    };

   // change cards , calcalute score and change score
    changeCard = id =>{
    
        // Clone this.state to the newState object
        const newState = { ...this.state };

        if ( ! newState.guessedIds.includes(id)){
            newState.guessedIds.push(id);
           
            newState.currentscore++;
            newState.messagestatus = "1";        
            newState.animating = true;
           
            
        }else{
            newState.messagestatus = "2";
            newState.animating = true;
            newState.topscore = 
                     newState.topscore>newState.currentscore
                     ? newState.topscore
                     : newState.currentscore;
            newState.currentscore=0;   
            newState.guessedIds =[];

        }       
        
        this.setState(newState);
        this.shuffleCard();


    }

    shuffleCard = () => {

        const cards = this.state.cards;
       
       
            let currentIndex = cards.length;
            let temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex --;
          
              // And swap it with the current element.
              temporaryValue = cards[currentIndex];
              cards[currentIndex] = cards[randomIndex];
              cards[randomIndex] = temporaryValue;
            }
        

        this.setState({cards});
    }

    resetgame = () =>{
        this.setState({
            guessedIds:[],
            currentscore:0,
            topscore:0,
            messagestatus:"0",
        })
    }

    render(){
        return (
            <div >
                <Navbar 
                        currentscore={this.state.currentscore}
                        topscore= {this.state.topscore}
                        messagestatus={this.state.messagestatus}
                        animating={this.state.animating}
                        resetgame={this.resetgame}
                />
                
                <Body />
                { this.state.cards.map(card =>
                   <Card 
                    id={card.id}
                    key={card.id.toString()}
                    name={card.name}
                    image={card.image}
                    changeCard={this.changeCard}
                   />
                )
                }
                <Footer />
            </div>
        )
    }

}
export default App;