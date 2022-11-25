// import Proptypes from 'prop-types'

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote,author}) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0,height:0})
  /*Se aconseja siempre usar useEffect hasta donde sea posible
  La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas 
  las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica.
  Las actualizaciones programadas dentro de useLayoutEffect se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad 
  de pintar.

Prefiera el useEffect estándar cuando sea posible para evitar el bloqueo de actualizaciones visuales.
  */
  useLayoutEffect(() => {
    const {width,height}=pRef.current.getBoundingClientRect();
    setBoxSize({width,height});
  }, [quote])
  // useEffect(() => {
  //   const {width,height}=pRef.current.getBoundingClientRect();
  //   setBoxSize({width,height});
  // }, [quote])

  return (
    <>
    <blockquote className="blockquote text-end"
      style={{display:'flex'}}
    >
                    <p ref={pRef} className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
// Quote.proptypes = {
//     quote:Proptypes.string.isRequired,
//     author:Proptypes.string.isRequired
// }