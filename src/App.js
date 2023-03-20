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

const checkForToken = () => {
  if (!localStorage.getItem('token')) {
    throw redirect('/login')
  }
  return null
}

const loginLoader = ({ params = {} } = {}) => {
  if (localStorage.getItem('token')) {
    throw redirect('/home')
  }
  return { ...params, isOnGateway: false }
}

const gatewayLoader = ({ params }) => (params = { ...params, isOnGateway: true })

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainApp />}>
      <Route path="qrpage" element={<QrPage />} />
      <Route path="login" element={<LoginPage />} loader={loginLoader} />
      <Route path="signup" element={<Signup />} loader={loginLoader} />
      <Route loader={checkForToken}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="gateway/:slug" element={<GatewayPage />} loader={gatewayLoader} />,
    </Route>,
  ),
)
function App() {
  return <RouterProvider router={router} />
}

export default App
