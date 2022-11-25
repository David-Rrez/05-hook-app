import { useConter,useFetch } from "../hooks";
import { LoadingQuote,Quote } from "./";

export const MultipleCustomHooks = () => {
    const {counter,increment} = useConter(1);
    const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);  
    const {quote,author} = !!data && data[0];
  return (
    <>
        <h1>Multiple Custom Hooks Breaking bad API</h1>
        <hr/>
        {
            isLoading 
            ? <LoadingQuote />
            : <Quote quote={quote} author={author}/>
            
        }
        <button className="btn btn-primary" onClick={() => increment(1)}>Next quote</button>
        
        
    </>
  )
}
