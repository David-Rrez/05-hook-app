import { useConter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const {counter,increment,decrement,reset} = useConter();
  return (
    <>
        <h1>Counter With Custom Hook:{counter}</h1>
        <hr/>
        <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>
        <button className="btn btn-warning" onClick={() => decrement(2)}>-1</button>
    </>
  )
}
