import { useEffect, useRef, useState } from "react";

const useFetch = (url = "") => {
  const isMounted = useRef(true);

  const initialState = { data: null, loading: true, error: null };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);
  
  useEffect(() => {
    setState(initialState);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        isMounted.current && setState(() => {
          return {
            loading: false,
            error: null,
            data
          }
        });
      })
      .catch(()=>{
        setState(() => {
          return {
            data: null,
            loading: false,
            error: "No se pudo cargar la info"
          }
        })
      })

  }, [url])

  return state;

}

export default useFetch;
