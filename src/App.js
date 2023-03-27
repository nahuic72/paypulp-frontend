import QrPage from 'Pages/QrPage'
import axios from 'axios'
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
import PayWithQR from 'Pages/Private/PayWithQR'

const checkForToken = async () => {
  const token = sessionStorage.getItem('token')

  if (!token) {
    window.location.href = '/login'
    return null
  }

  const url = `${process.env.REACT_APP_BASE_URL}/private/user/validatetoken`

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    })

    if (response.status === 200) {
      return null
    } else if (response.status === 401) {
      sessionStorage.removeItem('token')
      window.location.href = '/login?error=Unauthorized'
      return null
    } else {
      throw new Error(`Unexpected status code: ${response.status}`)
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem('token')
      window.location.href = '/login?error=Unauthorized'
    } else {
      window.location.href = '/login?error=UnexpectedError'
    }
    return null
  }
}

const goToLogin = () => {
  const isDefaultPage = window.location.pathname === '/'
  if (isDefaultPage) {
    window.location.href = '/login'
  }
  return null
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
      <Route path="qrpage" element={<QrPage />} /> {/* test only */}
      <Route path="login" element={<LoginPage />} loader={checkAlreadyAuthenticated} />
      <Route path="signup" element={<Signup />} loader={checkAlreadyAuthenticated} />
      <Route loader={checkForToken}>
        <Route path="home" element={<Home />} />
        <Route
          path="addsellerinfo/:checkoutType"
          element={<AddSellerInfoPage />}
          loader={passParams}
        />
        <Route path="paywithqr" element={<PayWithQR />} />
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
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
