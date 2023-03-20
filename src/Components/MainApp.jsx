import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const MainApp = () => {
  return (
    <main>
      <Outlet />
      <Toaster />
    </main>
  )
}

export default MainApp
