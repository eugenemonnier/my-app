import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5">
      <h1>Counter Application with Redux</h1>
      <p className="display-4">{count}</p>
      <button
        className="btn btn-success mx-2"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
          Increment
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
          Decrement
      </button>
    </div>
  );
}

export default App;