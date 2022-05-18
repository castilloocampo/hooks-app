import { useEffect, useRef, useState } from "react";

const UseFetch = (url = "") => {
  const isMounted = useRef(true);

  const initialState = { data: null, loading: true, error: null };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])


  useEffect(() => {
    setState(initialState)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        isMounted.current && setState({
          loading: false,
          error: null,
          data
        })
      })
      .catch(err => {
        isMounted.current && setState({
          loading: false,
          error: err,
          data: null
        })
      });

  }, [url])

  return state;

}

export default UseFetch;
