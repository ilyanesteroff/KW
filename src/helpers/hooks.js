import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { kwOnChange, openModal } from '../redux/actions'
import { useLocation } from 'react-router-dom'


export const useQuery = (keyword) => new URLSearchParams(useLocation().search).get(keyword)


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

export const useSearch = () => {
  const query = useQuery('name')
  const [ keyword, setKeyword ] = useState(query)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const params = new URLSearchParams()
    keyword
      ? params.append("name", keyword)
      : params.delete("name")

    history.push({ search: params.toString() })
    dispatch(kwOnChange, keyword)
  }, [ keyword, history, dispatch ])

  return { keyword, setKeyword }
}

export const useModal = () => {
  const [ image, setImage ] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if(image.length > 0){
      dispatch(openModal(image))
      const params = new URLSearchParams()
      params.set('image', image)
      history.push({ search: params.toString() })
    }
  }, [ image, dispatch, history ])

  return { setImage }
}