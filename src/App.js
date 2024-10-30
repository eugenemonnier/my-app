import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h1>Counter Application</h1>
      <p className="display-4">{count}</p>
      <button
        className="btn btn-success mx-2"
        onClick={() => setCount(count + 1)}
      >
          Increment
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => setCount(count - 1)}
      >
          Decrement
      </button>
    </div>
  );
}

export default App;