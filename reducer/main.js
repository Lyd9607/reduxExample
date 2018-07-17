import actions from '../constants/actionTypes';

const initState= {
  count: 0
};

export default function(state=initState,action) {
  const count = state.count;
  switch (action.type) {
    case actions.INCREASE: 
       return {count: count+1};
    case actions.DECREASE:
       return {count: count-1};
    default: 
       return state;
  }
}