import actions from '../constants/actionTypes';

export function increase(){
    return {
        type: actions.INCREASE
    }
}

export function decrease(){
  return {
    type: actions.DECREASE
  }
}