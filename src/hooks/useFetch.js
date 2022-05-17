import { useEffect, useState } from "react";

const UseFetch = (url = "") => {

  const initialState = {
    data: null,
    loading: true,
    error: null
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setState({
            loading: false,
            error: null,
            data
          })
        }, 500);
      })
      .catch(err => {
        setState({
          loading: false,
          error: err,
          data: null
        })
      });

  }, [url])

  return state;

}

export default UseFetch;
