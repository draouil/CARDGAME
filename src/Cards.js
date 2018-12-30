import React, { Component } from 'react';
//import ReactCardFlip from "react-card-flip";
//import {Deck,deck, Hand, Card, CardBack ,myDeck} from 'react-deck-o-cards';
import './Cards.css';
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import {handleClick } from "./actions/action";


class Cards extends Component {

  constructor() {
    super();
    this.state = {
      isFlipped: false,
      classNamediv:"fixed",
      classbutton:"cardFront",
      id : 0,
      visible :true,
      ArrayCards : []  ,
      card:{
        id:"",
        classNamediv:"",
        isFlipped:"",
        visible:"",
    


      }
    
    }; 
  }
 
   
 

  handleClick=(e)=>{ 
      let  { classNamediv ,visible  ,card ,ArrayCards }=  this.state
     
      if(classNamediv=== "fixed" && visible === true) 
      {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped , classNamediv: "fixed" , visible : false}));
        
      }
      if(classNamediv=== "fixed" && visible === false)  
      { 
        e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped ,classNamediv: "move"}));
      }
     
      if(classNamediv === "move"){
       
      this.setState({ classNamediv: "fixed"})
      }


    
      handleClick(card);
    
    }

render(){
 let  { classNamediv , isFlipped,id}=  this.state


return(
  <div  className="container">
  <div className={classNamediv} >
    <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
    <button  className="cardFront" onClick={(e)=>this.handleClick(e)} key="front">
  
    </button>
    <button className="cardBack"  backgroundColor={"#aaa"} onClick={(e)=>this.handleClick(e)} key="back" >
      { id}
    </button>
  </ReactCardFlip>
  

  </div>

<div className={classNamediv} >
<ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
<button  className="cardFront" onClick={(e)=>this.handleClick(e)} key="front">

</button>
<button className="cardBack"  backgroundColor={"#aaa"} onClick={(e)=>this.handleClick(e)} key="back" >
  { id}
</button>
</ReactCardFlip>
</div>


<div className={classNamediv} >
<ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
<button  className="cardFront" onClick={(e)=>this.handleClick(e)} key="front">

</button>
<button className="cardBack"  backgroundColor={"#aaa"} onClick={(e)=>this.handleClick(e)} key="back" >
  { id}
</button>
</ReactCardFlip>
</div>

</div>
);

}

}


//redux configuration:
const mapStateToProps = state => {
  return {
    Cards: state.CardReducer.Cards,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClick(card) {
      dispatch(handleClick(card));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards); 