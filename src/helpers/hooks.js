import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openModal } from '../redux/actions'
import validator from 'validator'


export const useParamsManager = (keyword) => {
  const params = new URLSearchParams(window.location.search)
  const history = useHistory()
  const value = params.get(keyword)

  const deleteParam = (callback = () => {}) => {
    params.delete(keyword)
    history.push({ search: params.toString() })
    callback()
  }

  return { deleteParam, value }
}

export const useFetch = (url, setData, extractData) => {
  useEffect(() => {
    fetch(url)
      .then(res => {
        if(res.ok) return res.json()
      })
      .then(res => {
        setData(extractData(res))
      })
  }, [ url, setData, extractData ])
}


export const useOverflowBlock = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  })
}


export const useModal = () => {
  const dispatch = useDispatch()
  const history = useHistory()
 
  const setImage = (image) => {
    if(image.length > 0 && validator.isURL(image)){
      dispatch(openModal(image))
      const params = new URLSearchParams()
      params.set('image', image)
      history.push({ search: params.toString() })
    }
  }

  return { setImage }
}