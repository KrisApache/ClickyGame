import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shuffle from 'shuffle-array';
import FlipMove from 'react-flip-move';
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickCount:0,
    topScore:0,
    currentScore:0,
    guess:""
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  renderCard = () => {
    
  }

  handleClick = id => {
    var rnum = Math.floor(Math.random() * 11 + 1);    

    if(rnum<4){
      if(this.state.clickCount===0){
        this.state.clickCount++;
        this.state.currentScore++;
        this.state.guess="You Guessed Correctly!";
      }
      else{
        this.state.clickCount++;
        this.state.currentScore=0;
        this.state.guess="You Guessed Incorrectly!";        
      }
    }
    else{
      this.state.clickCount++;
      this.state.currentScore++;
      this.state.guess="You Guessed Correctly!";      
    }

    if(this.state.currentScore>this.state.topScore){this.state.topScore = this.state.currentScore}
    this.forceUpdate();

    console.log("clicked :"+id);    
    console.log("random :"+rnum);
    console.log(this.state.guess);
    console.log("current "+this.state.currentScore);
    console.log("top "+this.state.topScore);
    
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Navbar
      score={this.state.currentScore}
      topScore={this.state.topScore}
      guess={this.state.guess}
      />
      <Title className="bg-primary">Clicky Game!</Title>      
      <FlipMove>
      <Wrapper>
 
       
        {Shuffle(this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
             />
        ))) }
        
      </Wrapper>
      </FlipMove>

      <Footer />  
      </div>
    );
  }
}

export default App;
