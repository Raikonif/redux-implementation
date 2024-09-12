import { useReducer, useState } from "react";

function CounterClassicAndReducer() {
  const [counter, setCounter] = useState(0);

  const INCREMENT = "increment";
  const DECREMENT = "decrement";

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  const reducer = (state: number, action: string) => {
    switch (action) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };

  const initialState = 0;

  const [counterCurrentState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter without Reducer: {counter}</h1>
      <button className="rounded-xl border bg-violet-600 p-2" onClick={increment}>
        Increment
      </button>
      <button className="rounded-xl border bg-violet-600 p-2" onClick={decrement}>
        Decrement
      </button>
      <br />
      <h1>Counter with Reducer: {counterCurrentState}</h1>
      <button className="rounded-xl border bg-sky-600 p-2" onClick={() => dispatch(INCREMENT)}>
        Increment
      </button>
      <button className="rounded-xl border bg-blue-600 p-2" onClick={() => dispatch(DECREMENT)}>
        Decrement
      </button>
    </div>
  );
}

export default CounterClassicAndReducer;
