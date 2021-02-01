import { createStore } from 'redux'

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('h1')
const btnIncrease = document.querySelector('#increase')
const btnDecrease = document.querySelector('#decrease')

// action
const TOGGLE_SWITCH = 'TOGGLE_SWITCH'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// action 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH })
const increase = () => ({ type: INCREASE, difference })
const decrease = () => ({ type: DECREASE })

// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
}

// reducer
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지를 해주어야 합니다
                toggle: !state.toggle
            }
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.diffence
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

// store 생성
const store = createStore(reducer)

// render 함수 생성
const render = () => {
    const state = store.getState() // 현재 상태를 불러옵니다.
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active')
    } else {
        divToggle.classList.remove('active')
    }

    // 카운터 처리
    counter.innerText = state.counter
}

render()
store.subscribe(render)

divToggle.onclick = () => {
    store.dispatch(toggleSwitch())
}
btnIncrease.onclick = () => {
    store.dispatch(increase(1))
}
btnDecrease.onclick = () => {
    store.dispatch(decrease())
}
