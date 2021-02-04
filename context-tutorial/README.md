# Context API

  Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 경우 유용한 기능입니다. 이를테면 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등 여러 종류가 있습니다. 

<br />
<br />
<br />

## Context API를 사용한 전역 상태 관리 흐름 이해하기
전역적으로 상태를 관리하기 위해서는 어떻게 해야할까요? 일반적으로 리액트는 컴포넌트 간의 데이터를 props로 전달(부모 -> 자식)합니다. 따라서 여기저기 필요한 데이터이가 있는 경우 최상위 컴포넌트의 state에서 관리하며 자식 컴포넌트로 [prop drilling](https://kentcdodds.com/blog/prop-drilling)할 수 밖에 없습니다. 그러나 Context API를 통한 상태 관리를 하게 된다면 context를 만들어 단 한 번에 원하는 값을 받아 와서 사용할 수 있습니다.

<br />
<br />

## Context API 사용법 익히기
context를 만들기 위해서는 
```
import { createContext } from 'react';
```
를 사용합니다.

예시)
```js
import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;
```

ColorContxt에 context 생성했고 아래와 같이 사용합니다.
```js
import ColorContext from '../context/color';

const ColorBox = () => {
    return(
        <ColorContext.Consumer>
            {value => (
                <div 
                    style={{
                        width: '64px',
                        height: '64px',
                        background: value.color
                    }}
                />
            )}
        </ColorContext.Consumer>
    )
}

export default ColorBox;
```

`Consumer` 사이에 중괄호를 열어 그 안에 함수를 넣어주는 형태의 패턴을 `Function as a child` 혹은 `Render Props`라고 합니다. children으로 함수를 전달하는 것이죠.

<br />
<br />

## Provider
`Provider`를 사용하면 context의 value를 변경할 수 있습니다.

```jsx
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
    return (
        <ColorContext.Provider value={{ color: 'red' }}>
            <div>
                <ColorBox />
            </div>
        </ColorContext.Provider>
    );
};

export default App;
```

기존에 createContext 함수를 사용할 때는 파라미터로 기본값을 넣어주었습니다. 이 기본값은 `Provider`를 사용하지 않았을 때만 사용됩니다. **만약 `Provider`는 사용했는데 value를 명시 하지 않으면 이 기본값을 사용하지 않았기 때문에 오류가 발생합니다.**

<br />
<br />

## 동적 Context 사용하기

```jsx
import { createContext, useState } from 'react';

const ColorContext = createContext({ 
    state: { color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
```

`Provider`의 value에는 상태는 state, 업데이트 함수는 actions로 묶어서 전달하고 있습니다. Context에서 값을 동적으로 사용할 때 반드시 묶어 줄 필요는 없지만, state와 actions 객체를 따로따로 분리해 주면 나중에 다른 컴포넌트에서 context의 값을 사용할 때 편리합니다.  
**`createContext`의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋습니다.** 이렇게 하면, context 코드를 볼 때 내부 값이 어떻게 구성되어 있는지 파악하기 쉬우며, 실수로 Provider를 사용하지 않았을 때 애플리케이션에서 에러가 발생하지 않습니다.

<br />

`ColorConsumer`에서 context를 사용할 때는 객체 비구조화 할당 문법(destructuring assignment)을 사용하면 다음과 같이 value를 조회하는 것을 생략할 수 있습니다.

```jsx
...
    <ColorConsumer>
        {({ state }) => (
            <>
                <div 
                    style={{
                        width: '64px',
                        height: '64px',
                        background: state.color
                    }}
                />
                <div 
                    style={{
                        width: '32px',
                        height: '32px',
                        background: state.subcolor
                    }}
                />
            </>
        )}
    </ColorConsumer>
...
```

ColorCusumer를 통해 색상을 업데이트 해봅시다.
```jsx
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: 'flex' }}>
                        {colors.map(color => (
                            <div 
                                key={color}
                                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault();
                                    actions.setSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;
```

ColorCusumer의 `action` 객체를 내려받고 그 안에 사용할 수 있습니다.(`action.setColor()`, `action.setSubcolor()`)
`onContextMeun` Property는 마우스 오른쪽 클릭 이벤트를 받습니다. 그리고 `e.preventDefault()`를 통해서 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 막을 수 있습니다.