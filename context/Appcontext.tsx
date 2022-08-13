import React, {FC, createContext, useState} from 'react'
import {INews} from '../types/news'

interface AppContextProp {
  data: INews
  setNews: (data: INews) => void
}

export const AppContext = createContext<AppContextProp | null>(null)

const Appcontext: FC = ({children}) => {
  const [data, setData] = useState<INews>({
    anons: '',
    full: '',
    img: '',
    key: '',
    name: '',
  })
  const setNews = (data: INews) => setData(data)

  return (
    <AppContext.Provider value={{data, setNews}}>
      {children}
    </AppContext.Provider>
  )
}

export default Appcontext
