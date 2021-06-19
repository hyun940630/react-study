// counter.js

// action
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// action 생성함수
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = 0;

// reducer
const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

console.log(counter);
export default counter;
