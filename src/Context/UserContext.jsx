import { createContext, useState } from 'react'

export const userContext = createContext(null)

const UserCtxt = ({ children }) => {
  const [userContext, setUserContext] = useState({})

  return (
    <userContext.Provider value={{ userContext, setUserContext }}>{children}</userContext.Provider>
  )
}

export default UserCtxt
