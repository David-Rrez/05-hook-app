import { useState } from "react";
import { useConter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
  const {counter,increment} =  useConter(10);
  const [show, setShow] = useState(true);
    
  return (
    <>
        <h1>Memorize Countre: <Small value={counter}/> </h1>
        <hr />
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
