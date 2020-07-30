import { useState, useEffect, useLayoutEffect } from 'react'

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

let width = () => window.innerWidth
document.addEventListener('resize', width)
const height = () => window.innerHeight

const useFetch = (url, opts, func, key) => {
  const controller = new AbortController()
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({hasError: false, message: ''})
  
  useEffect(() => {
    setLoading(true)
    let dataExists = getDate(key)
      
    dataExists ? setResponse(dataExists) : 
    fetch(url, Object.assign({}, opts, {signal: controller.signal}))
      .then(res => res.json())
      .then(res => func(res))
      .then(res => {
        setItem(res, key)
        setResponse(res)
      })
      .catch((err) => {
        setError({
          hasError: true,
          message: 'Something went wrong'
        })
        console.log('error' + err)
      })
      //setTimeout(_ => controller.abort(), 10000)

    setLoading(false)

    return _ => controller.abort()
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
    value.pop()
  }
  
  return [ response, loading, error ]
}

const useSpinnerSuspense = (delay) => {
  const [ showSpinner, setShowSpinner ] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowSpinner(true), 10)
  }, [])

  useLayoutEffect(() => {
    showSpinner? document.getElementById('footer').style.marginTop = '15vh' : document.getElementById('footer').style.marginTop = '90vh'
  }, [showSpinner])

  return [showSpinner]
}

export { makeCancelable, width, height, useFetch, useSpinnerSuspense }