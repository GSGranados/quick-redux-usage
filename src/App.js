import React from "react";
import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
function App() {
  const counter =  useSelector(state => state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I should not see at all</h3> : <h3>Nel no estas loggeado perro</h3>}
    </div>
  );
}

export default App;
