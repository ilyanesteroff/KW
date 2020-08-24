import { useLayoutEffect, useEffect, useState } from 'react'
import { serverKey, serverUrl } from '../MainSection/refs/key'

const useAddingEventListeners = (func) => {
  useEffect(() => {
    window.addEventListener('keyup', func)
    return _ => window.removeEventListener('keyup', func)
  }, [])
}

const useCurrent = (val) => {
  const [ current, setCurrent ] = useState(val)

  const nextPrev = event => {
    let element 
    event.target.classList.contains('NavArrow') ? element = event.target : element = event.target.parentElement
    setCurrent(prevVal => element.id === 'right' ? prevVal + 1 : prevVal - 1)
  }

  return [current, setCurrent, nextPrev]
}

const useOpenCloseModal = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const closeModal = event => {
    if(event.keyCode === 27) setIsModalOpened(false)
  }
  useAddingEventListeners(closeModal)
  return [setIsModalOpened, isModalOpened]
}

const useManageSectionSwitching = () => {
  const refs = []
  const [current, setCurrent, nextPrev] = useCurrent(0)

  useLayoutEffect(() => {
    refs[current].current.focus()
    refs[current].current.classList.add('activeTabLink')
  }, [])

  useLayoutEffect(() => {
    Array.from(document.getElementsByClassName('tabLinks')).forEach(button => button.classList.remove('activeTabLink'))
    refs[current].current.focus()
    refs[current].current.classList.add('activeTabLink')
  }, [current])
  
  const switchSection = event => {
    if(event.keyCode === 13) setCurrent(prevVal => prevVal < refs.length - 1 ? prevVal + 1 : 0 )
  } 

  useAddingEventListeners(switchSection)

  const changeActiveElement = (event) => {
    setCurrent(parseInt(event.target.id))
  }

  return [changeActiveElement, refs, current, nextPrev]
}

const useDocumentTitleSetting = (content) => {
  useEffect(() => {
    document.title = content
    return _ => document.title = ''
  }, [])
} 

const useFetch = (link, func = '', key = '', options = {}) => {
    const controller = new AbortController()
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({hasError: false, message: ''})
    
    useEffect(() => {
      setLoading(true)
      let dataExists = getDate(key)
      const url = serverUrl+link
      const opts = generateOptions(options)

      dataExists ? setResponse(dataExists) : 
      fetch(url, Object.assign({}, opts , {signal: controller.signal}))
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if(func === '') return res
          else return func(res)
        })
        .then(res => {
          if (key !== '') setItem(res, key)
          setResponse(res)
        })
        .catch((err) => {
          setError({
            hasError: true,
            message: 'Something went wrong'
          })
          console.log('error' + err)
        })
  
      setLoading(false)
  
      return _ => controller.abort()
    }, [link])
  
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

const generateOptions = data => {
  let opts = {
    'headers' : {
      'Content-Type' : 'application/json', 
      'authorization' : serverKey
    }
  }
  if (data === {}) return opts
  else return Object.assign({}, data, opts)
}

export { useOpenCloseModal, useManageSectionSwitching, useDocumentTitleSetting, useSpinnerSuspense, useFetch, useCurrent }