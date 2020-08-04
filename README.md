# TypeScript + React Study

 <br />

> React에서 TypeScript 사용하기

<br />
<br />

### 프로젝트 생성하기

\$ `npx create-react-app ts-react-tutorial --typescript`
<br />

> 새롭게 만든 프로젝트를 실행하고 싶다면 터미널에서 `npm start`를 실행합니다.

<br />

기존 React 프로젝트와는 다르게 TypeScript 기반의 React 프로젝트는 `.tsx` 확장자를 사용합니다.

`{root}/src/App.tsx`의 컴포넌트를 살펴보면

```
const App: React.FC = () => {
    return(
        ...
    )
}
```

와 같은 구성을 가지고 있습니다.
하지만, 최근에는 `화살표 함수(Arrow Function)`를 사용하지 않고 function() { ... }의 형태를 많이 사용합니다.
그리고 몇몇 유명 개발자 분들은 `화살표 함수`를 사용하지 않고 `function`으로 컴포넌트를 구성합니다. React 공식 문서에서도 `function`으로 컴포넌트를 구성했죠.

새로운 컴포넌트를 작성하며 `function`이 `React.FC` 보다 좋은 이유를 알아 봅시다.

<br />
<br />
<br />

### 새로운 컴포넌트 만들기

```
import React from 'react';

type GreetingsProps = {
    name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    <div>Hello, {name}</div>
);

export default Greetings;
```

<br />

컴포넌트의 props 타입을 설정 할 때는 `type` 이나 `interface`를 사용합니다.
둘 중 어떤 것을 사용하는지는 본인의 선택이며 프로젝트에서 일관성을 가지고 사용하면 됩니다.

<br />
<br />
<br />

### React.FC의 장단점

`React.FC`를 사용할 때는 props 타입을 Generics로 넣어서 사용합니다. 이렇게 `React.FC`를 사용하면 얻을 수 있는 이점은 두가지가 있습니다.

<br />

1. props에 기본적으로 `children`이 들어감
2. 컴포넌트의 defaultProps, propsTypes, contextTypes를 설정 할 때 자동완성이 됨

<br />

그러나 한편으로는 단점도 존재합니다. `children`이 옵셔널 형태로 들어가 있기 때문에 컴포넌트의 props 타입이 명백하지 않습니다.
예를 들어 `children`이 필요하거나 필요하지 않은 컴포넌트가 있다면 어떤 경우에도 명시적으로 Props 타입 안에 `children`을 명시해야하는 것이 맞습니다.

구체적으로 예를 들자면 다음과 같습니다.

```
type GreetingsProps = {
    name: string;
    children: React.ReactNode;
};
```

<br />

결국 React.FC에 `children` props가 들어가 있는 것은 장점이 아닙니다. 차라리, `React.FC`를 사용하지 않고 명백하게 GreetingsProps를 통해 `children`이 들어있다, 들어있지 않다를 명백하게 나누는 것이 헷갈리지 않습니다.(명시적입니다.)

<br />

추가적으로, React.FC를 사용하는 경우 현재 작성한 컴포넌트에서 `defualtProps`가 제대로 작동하지 않습니다.

... 작성중
