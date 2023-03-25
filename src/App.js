import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import QrPage from 'Pages/QrPage'
import {
  createBrowserRouter,
  Route,
  redirect,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom'
import 'Styles/App.css'
import 'Styles/Buttons.css'
import MainApp from 'Components/MainApp'
import GatewayPage from 'Pages/GatewayPage.jsx'
import LoginPage from 'Pages/Public/LoginPage'
import Signup from 'Pages/Public/Signup'
import Home from 'Pages/Private/Home'
import QrGenPage from 'Pages/Private/QrGenPage'
import AddSellerInfoPage from 'Pages/Private/AddSellerInfoPage'

/* const checkForToken = () => {
  if (!sessionStorage.getItem('token')) {
    throw redirect('/login')
  }
  return null
} */

const checkForToken = () => {
  if (!sessionStorage.getItem('token')) {
    window.location.href = '/login'
  }
  return null
}

const goToLogin = () => {
  const isDefaultPage = window.location.pathname === '/'
  if (isDefaultPage) {
    window.location.href = '/login'
  }
  return null
}

const loginLoader = ({ params = {} } = {}) => {
  // proper check for token
  return { ...params, isOnGateway: false }
}

const qrGenLoader = ({ params }) => {
  if (params.accountType === 'personal') throw redirect(`/addsellerinfo/${params.checkoutType}`)
  return params
}

const checkAlreadyAuthenticated = () => {
  const token = sessionStorage.getItem('token')
  if (token) {
    throw redirect('/home')
  }
  return null
}

const passParams = ({ params }) => params

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainApp />} loader={goToLogin}>
      <Route path="qrpage" element={<QrPage />} />
      <Route
        path="login"
        element={<LoginPage />}
        loader={checkAlreadyAuthenticated} /* loader={loginLoader}  */
      />
      <Route
        path="signup"
        element={<Signup />}
        loader={checkAlreadyAuthenticated} /* loader={loginLoader}  */
      />
      <Route loader={checkForToken}>
        <Route path="home" element={<Home />} />
        <Route
          path="addsellerinfo/:checkoutType"
          element={<AddSellerInfoPage />}
          loader={passParams}
        />
        <Route
          path="qrgen/:accountType/:checkoutType"
          element={<QrGenPage />}
          loader={qrGenLoader}
        />
      </Route>
      <Route
        path="gateway/:sellerUuid/:checkoutType/:totalAmount"
        element={<GatewayPage />}
        loader={passParams}
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
