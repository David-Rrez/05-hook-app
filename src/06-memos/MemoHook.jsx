import { useMemo, useState } from "react";
import { useConter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahí vamos...')
    }
    return `${iterationNumber} iteraciones realizados`
}

export const MemoHook = () => {
  const {counter,increment} =  useConter(10);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo( () => heavyStuff(counter),[counter]);
    
  return (
    <>
        <h1>Memorize Counter: <small>{counter}</small> </h1>
        <hr />
        <h4>{memorizedValue}</h4>
        <button
            className="btn btn-info"
            onClick={ () => increment(1)}
        >
            +1
        </button>
        <button
            className="btn btn-primary"
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
