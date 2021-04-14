import { useLocation } from 'react-router-dom'


export const useQuery = (keyword) => new URLSearchParams(useLocation().search).get(keyword)
