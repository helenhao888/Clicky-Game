import React, {Component} from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import initialCards from "./cards.json";
import cards  from "./cards.json";

class App extends Component{

    state = {
        cards,
        initialCards,
        guessedIds:[],
        currentScore:0,
        topScore:0
    };

    changeCard = id =>{
    // calcalute score and change score

        console.log("clicked id",id);
        if ( ! this.state.guessedIds.includes(id)){
            this.state.guessedIds.push(id);
            console.log("correct");
            // this.state.currentScore++
            // current++;
            // this.setStatestate({currentScore: current})
        }else{
            console.log("wrong");
        }
        console.log("guessed ids",this.state.guessedIds);
        
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
          
         console.log("cards",cards);
          

        this.setState({cards});
    }

   

    render(){
        return (
            <div >
                <Navbar currentSocre={this.state.currentScore}
                        topScore= {this.state.topScore}
                />
                <Body />
                { this.state.cards.map(card =>
                   <Card 
                    id={card.id}
                    key={card.id.toString()}
                    // key={shortid.generate()}
                    name={card.name}
                    image={card.image}
                    changeCard={this.changeCard}
                   />
                )
                }
            </div>
        )
    }

}
export default App;