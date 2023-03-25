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

const checkForToken = () => {
  if (!localStorage.getItem('token')) {
    throw redirect('/login')
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

const passParams = ({ params }) => params

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainApp />}>
      <Route path="qrpage" element={<QrPage />} />
      <Route path="login" element={<LoginPage />} loader={loginLoader} />
      <Route path="signup" element={<Signup />} loader={loginLoader} />
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
      ,
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
