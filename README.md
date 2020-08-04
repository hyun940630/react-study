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
