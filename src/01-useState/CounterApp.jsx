import { useState } from "react"

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    });
    const {counter1,counter2,counter3} = state;
  return (
    <>
        <h1>CounterApp1 {counter1}</h1>
        <h1>CounterApp2 {counter2}</h1>
        <h1>CounterApp3 {counter3}</h1>
        
        <hr/>
        <button onClick={ () => setCounter((prevState) =>({...prevState,counter1:counter1+1}))} className="btn btn-outline-secondary">+1</button>
    </>
  )
}
