import Greetings from './Greetings';
import React from 'react';

const App: React.FC = () => {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };

    return <Greetings name="Hello" mark="?" onClick={onClick} />;
};

export default App;
