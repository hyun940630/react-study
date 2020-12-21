# `immer`를 사용하여 더 쉽게 불변성 유지하기

> React에서는 불변성을 유지하면서 상태를 업데이트하는 것이 중요합니다. 전개연산자(...)와 배열의 내장 함수를 사용하면 간단하게 배열 혹은 객체를 복하고 새로운 값을 덮어 쓸 수 있습니다. 하지만 객체의 구조가 엄청나게 깊어지면 불변성을 유지하면서 이를 업데이트하는 것은 매우 힘든 일이 됩니다. immer을 배워서 불변성을 더 쉽게 유지해봅시다.

## 프로젝트 준비하기

```
$ npx create-react-app immer-tutorial
$ cd immer-tutorial
$ yarn add immer
```

## immer 사용하기

```
$ yarn add immer
```

### immer 기본 사용법

```js
import produce from 'immer';

const nextState = produce(originalState, (draft) => {
    // 바꾸고 싶은 값 바꾸기
    draft.somewhere.deep.inside = 5;
});
```

### useState의 함수형 업데이트와 immer 함께 쓰기

#### 함수형 업데이트 예시

```js
const [number, setNumber] = useState(0);

// prevNumbers는 현재 number 값을 가리킵니다.
const onIncrease = useCallback(
    () => setNumber((prevNumber) => prevNumber + 1),
    []
);
```

#### `immer` produce 함수의 첫 번째 파라미터에 함수 형태를 전달하면 업데이트 함수를 반환

```js
const update = (draft) => {
    draft.value = 2;
};

const originalState = {
    value: 1,
    foo: 'bar',
};

const nextState = update(originalState);
console.log(nextState);
```

#### useState + immer

```js
...

setData(
    produce(draft => {
        draft.array.push(info)
    })
);

...
```
