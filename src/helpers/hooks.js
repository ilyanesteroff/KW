import { useEffect } from 'react'
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