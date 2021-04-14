import { createContext } from 'react'


export const MenuOpenedContext = createContext({ opened: false, setOpened: () => {} })