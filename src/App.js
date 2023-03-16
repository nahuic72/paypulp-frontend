import QrPage from 'Pages/QrPage'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import 'Styles/App.css'
import 'Styles/Buttons.css'
import MainApp from 'Components/MainApp'
import GatewayPage from 'Pages/GatewayPage.jsx'
import Dashboard from 'Pages/Private/Dashboard'
import LoginPage from 'Pages/Public/LoginPage'
import Signup from 'Pages/Public/Signup'
import UserProfile from 'Pages/UserProfile'

const checkForToken = () => {
  if (!localStorage.getItem('token')) {
    throw redirect('/login')
  }
  return null
}

const loginLoader = ({ params }) => {
  if (localStorage.getItem('token')) {
    throw redirect('/dashboard')
  }
  return { ...params, isOnGateway: false }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    // errorElement: <ErrorPage />,
    children: [
      // -TEST-
      {
        path: 'qrpage',
        element: <QrPage />,
      },
      // ------
      {
        path: 'login',
        loader: loginLoader,
        element: <LoginPage />,
      },
      {
        path: 'signup',
        loader: loginLoader,
        element: <Signup />,
      },
      {
        path: '',
        loader: checkForToken, // protected routes
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'profile',
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
  {
    path: 'gateway/:slug',
    loader: ({ params }) => (params = { ...params, isOnGateway: true }),
    element: <GatewayPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
