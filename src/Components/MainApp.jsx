import useTokenValidation from 'Hooks/useTokenValidation'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar/NavBar'

const MainApp = () => {
  const { tokenError, setTokenError } = useTokenValidation()

  return (
    <main>
      {/* <NavBar /> */}
      <Outlet />
      {/* toast */}
    </main>
  )
}

export default MainApp
