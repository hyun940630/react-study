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

<br />

> Greetings.tsx

```
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```

> App.tsx

```
import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  return <Greetings name="Hello" />;
};

export default App;

```

<br />

이 경우 `App.tsx`에서 에러가 발생합니다. 왜냐하면 mark에 defaultProps를 넣었지만 인식하지 못합니다. 따라서 아래와 같이 사용해야 합니다.

<br />

> 수정된 Greetings.tsx

```
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
  <div>
    Hello, {name} {mark}
  </div>
);

export default Greetings;
```

<br />

`React.FC`에서 이 문제를 해결하기 위해서는 아래와 같이 사용합니다.

```
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings = ({ name, mark }: GreetingsProps) => (
  <div>
    Hello, {name} {mark}
  </div>
);

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```

<br />

결국 `React.FC`를 사용하게 되면 위와 같은 문제가 발생하게 됩니다.
그러나 `Greetings`에서 `React.FC`를 제거하면 잘 작동하게 됩니다.
따라서 많은 사람들이 `React.FC`를 생략하자고 말합니다. 하지만 이는 취향차이입니다.
또 화살표를 사용하지면 아래와 같은 형태가 됩니다.

<br />

> Greetings.tsx(Arrow function을 사용하지 않음)

```
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
```

<br / >
<br / >

### 컴포넌트에 생략가능한 props 설정하기

만약 porps에 생략가능한 props를 설정하기 위해서는 `?`를 사용해주면됩니다.
<br />

```
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
};

function Greetings({ name, mark, optional }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;

```

<br />
<br />

### 컴포넌트에서 함수 타입의 props 받아오기

만약 이 컴포넌트에서 함수 타입의 porps를 받아온다면 다음과 같이 타입을 지정할 수 있습니다.

<br />

```
import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};
```

<br />

> App.tsx에서 Greetings에게 onClick props를 넘겨줍니다.

```
import React from 'react';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  return <Greetings name="Hello" onClick={onClick} />;
};

export default App;
```

<br />

이제 Greetings 컴포넌트에는 onClick prop가 꼭 필요합니다. 만약 prop를 넘겨주지 않으면 에러가 발생하게 되죠.
컴포넌트를 사용하는 과정에서 이 컴포넌트에 무엇이 필요했는지 궁금할때는 단순히 컴포넌트 위에 마우스 커서를 올려보거나 컴포넌트를 설정하는 부분에서 `Ctrl + space`로 눌러보는 방법이 있습니다.

<br />
<br />

이제 React에서 TypeScript를 사용하는 방법을 모두 배우게 됐습니다.

<br />
<br />

### 정리

지금까지 배운 내용을 요약해보자면,

-   `React.FC`는 별로 좋지 않다.
-   Functional Component 작성 시 `화살표함수(Arrow Function)`를 사용하거나 `function`를 사용한다.
-   Props 타입을 사용할 때는 `interface` 또는 `type`를 사용하고, 둘 중 하나를 사용하면 프로젝트 내에서 일관성을 가지면 된다.
