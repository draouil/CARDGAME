export const CardReducer = (state = { ArrayCards: [] }, action) => {
    let newState;
  
    switch (action.type) {
        case "SET_ACTION_TYPE":
        newState = Object.assign({}, state, { Card: action.data });
        
   

        let ArrayCards = [...newState.ArrayCards];
       if(action.data)
         
     // let ArrayCards.push(action.data);
      newState.ArrayCards = ArrayCards;
          
        return newState;
  
      default:
        return state;
    }
  };
  
  export default CardReducer;