import { useLayoutEffect, useEffect, useState } from 'react'

const useAddingEventListeners = (func) => {
  useEffect(() => {
    window.addEventListener('keyup', func)
    return _ => window.removeEventListener('keyup', func)
  }, [])
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
  const [ current, setCurrent ] = useState(0)

  useLayoutEffect(() => {
    refs[current].current.focus()
    refs[current].current.classList.add('activeTabLink')
  }, [])

  useLayoutEffect(() => {
    let buttons = Array.from(document.getElementsByClassName('tabLinks'))
    buttons.forEach(button => button.classList.remove('activeTabLink'))
    refs[current].current.focus()
    refs[current].current.classList.add('activeTabLink')
  }, [current])
  
  const switchSection = event => {
    if(event.keyCode === 13) {
      setCurrent(prevVal => {
        return prevVal < refs.length - 1 ? prevVal + 1 : 0;
      })
    }
  } 

  useAddingEventListeners(switchSection)

  const changeActiveElement = (event) => {
    setCurrent(parseInt(event.target.id))
  }

  return [changeActiveElement, refs, current]
}

const useDocumentTitleSetting = (content) => {
  useEffect(() => {
    document.title = content
    return _ => document.title = ''
  })
} 

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

export { useOpenCloseModal, useManageSectionSwitching, useDocumentTitleSetting, useSpinnerSuspense, useFetch }