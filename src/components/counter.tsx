import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);


    const decrementCounter = (): void => {
        setCounter(counter => counter - 1);
    }

    const incrementCounter = (): void => {
        setCounter(counter => counter + 1);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div data-cy="counter">{counter}</div>
        <div className="flex gap-5">
            <button onClick={decrementCounter} className="bg-blue-500 px-8 text-white" data-cy="decrement">-</button>
            <button onClick={incrementCounter} className="bg-blue-500 px-8 text-white" data-cy="increment">+</button>
        </div>
    </div>
    )
};

export default Counter;