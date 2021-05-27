import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
