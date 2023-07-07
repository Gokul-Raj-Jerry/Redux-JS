import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const resetHandler = () => {
    dispatch({ type: 'reset' });
  }

  return (
    <>
   <div>Redux Counter</div>
   <h1>{counter}</h1>
   <button onClick={incrementHandler}>Increment</button>
   <button onClick={decrementHandler}>Decrement</button>
   <button onClick={resetHandler}>Reset</button>
   </>
  );
}

export default App;