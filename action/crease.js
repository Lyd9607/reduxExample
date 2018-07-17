import actions from '../constants/actionTypes';

export const increase = () => {
  return {
    type: actions.INCREASE
  }
}

export const decrease = () => {
  return {
    type: actions.DECREASE
  }
}