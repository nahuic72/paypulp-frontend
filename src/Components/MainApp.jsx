import useTokenValidation from 'Hooks/useTokenValidation'
import { Outlet } from 'react-router-dom'

const MainApp = () => {
  // const { tokenError, setTokenError } = useTokenValidation()

  return (
    <main>
      <Outlet />
      {/* toast */}
    </main>
  )
}

export default MainApp
