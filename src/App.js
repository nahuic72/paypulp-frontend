import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import MainApp from './Components/MainApp'
import Dashboard from './Pages/Private/Dashboard'
import Login from './Pages/Public/LoginPage'
import PaymentView from './Pages/PaymentView.jsx'
import Signup from './Pages/Public/Signup'
import UserProfile from './Pages/UserProfile'
import 'Styles/App.css'
import 'Styles/Buttons.css'
import QrPage from 'Pages/QrPage'

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
  return (params = { isOnGateway: false })
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
        element: <Login />,
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
    path: 'gateway/:productUuid',
    loader: ({ params }) => (params = { ...params, isOnGateway: true }),
    element: <PaymentView />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
