import React from "react";

const Counter = ({ onIncrease, onDecrease, number }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button>+1</button>
                <button>-1</button>
            </div>
        </div>
    );
};

export default Counter;
