import { useState, useEffect } from 'react'

const makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
            error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

const width = () => window.innerWidth

const useFetch = (url, opts, func, key) => {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      let dataExists = getDate(key)
      
      dataExists ? setResponse(dataExists) : 
      fetch(url, opts)
        .then(res => res.json())
        .then(res => func(res))
        .then(res => setItem(res, key))
        .then(res => {
          res.pop()
          setResponse(res)
        })
        .catch(() => setHasError(true))
      
      setLoading(false)
    }, [url])

    const getDate = key => {
      let data = localStorage.getItem(key)

      if (data === null) return false

      try {
        data = data.split(',')
        let date = new Date(data[data.length-1])
        let now = new Date()
        data.pop()
        if(date.getUTCHours() !== now.getUTCHours())
        data = false
      } catch (error) {
        console.log(error)
        data = false
      } finally {
        return data
      }
    }
    
    const setItem = (value, key) => {
        let today = new Date()
        value.push(today)
        localStorage.setItem(key, value)

        return value
    }
  
    return [ response, loading, hasError ]
}



function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    console.log('set')
    return [storedValue, setValue];
  }

export { makeCancelable, width, useFetch, useLocalStorage }