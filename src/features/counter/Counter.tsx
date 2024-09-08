import React from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <div>
        <button
          className="rounded-xl border-2 bg-purple-600 p-2 text-white"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="p-2 text-white">{count}</span>
        <button
          className="rounded-xl border-2 bg-blue-600 p-2 text-white"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
