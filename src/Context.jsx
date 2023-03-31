import React, { useContext, useState } from 'react'

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
const [show,setShow] = useState(false);

const openSidebar = () =>(
  setShow(true)
  )

const closeSidebar = () =>(
  setShow(false)
  )

  return <AppContext.Provider value={{
    show,openSidebar,closeSidebar
  }}>{children}</AppContext.Provider>
    
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}


