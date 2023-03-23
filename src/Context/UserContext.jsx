import { createContext, useState } from 'react'

export const userContext = createContext(null)

const UserContext = ({ children }) => {
  const [userCtxt, setUserCtxt] = useState({})

  return <userContext.Provider value={{ userCtxt, setUserCtxt }}>{children}</userContext.Provider>
}

export default UserContext
