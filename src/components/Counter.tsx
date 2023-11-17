import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  decrementAsync,
  clear,
} from "../state/Counter/CounterSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(10))}>
        INCREMENT BY 10
      </button>
      <button onClick={() => dispatch(decrementByAmount(10))}>
        DECREMENT BY 10
      </button>
      <br />
      <button title="This is an Async call, will take some time." onClick={() => dispatch(incrementAsync(10))}>
        ASYNC INCREMENT BY 10
      </button>
      <button title="This is an Async call, will take some time." onClick={() => dispatch(decrementAsync(10))}>
        ASYNC DECREMENT BY 10
      </button>
      <br />
      <button onClick={() => dispatch(clear())}>CLEAR</button>
    </>
  );
};

export default Counter;
