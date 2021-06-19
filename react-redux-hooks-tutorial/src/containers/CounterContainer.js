import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = () => {
    // NOTE: useSelector는 redux store 안의 값을 조회할 때 사용하는 hook
    // ... useSelector(params, [deps]);
    const counter = useSelector((state) => state.counter, []);

    // NOTE: useActions는 action 생성함수를 container component 안에서 사용할때 쓸수있는 hook
    // * 3가지 사용방법
    // 1. const boundAC = useActions(actionCreator: Funcion, deps: any[])   하나의 action 생성함수를 사용할때 쓰는 방법
    // const onIncease = useActions(increment);
    // 2. const boundACsObject = useActions(actionCreators: Object<string, Function>, deps: any[])  여러개의 action 생성함수를 사용하는데 객체 형태로 사용
    // const { onIncreae, onDecrease } = useActions({
    //     onIncease: increment,
    //     onDecrease: decrement,
    // });
    // 3. const boundACsArray = useActions(actionCreators: Function[], deps: any[])     여러개의 action 생성함수를 사용하는데 배열형태로 사용
    // const [onIncease, onDecrease] = useActions([increment, decrement], []);
    // NOTE: useActions는 현재 제거됨. 사용 불가. 따라서 useDispatch()사용

    const dispatch = useDispatch();

    const incrementCounter = useCallback(
        () => dispatch({ type: "INCREMENT" }),
        [dispatch]
    );

    const decrementCounter = useCallback(
        () => dispatch({ type: "DECREMENT" }),
        [dispatch]
    );

    return (
        <Counter
            number={counter}
            onIncrease={incrementCounter}
            onDecrease={decrementCounter}
        />
    );
};

export default CounterContainer;
