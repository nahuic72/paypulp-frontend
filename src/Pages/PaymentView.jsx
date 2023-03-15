import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { userContext } from 'Context/UserContext'
import ConfirmPurchase from 'Components/ConfirmPurchase'
import Submitting from 'Components/Submitting'
import PaymentGateway from 'Services/PaymentGateway'
import 'Styles/PaymentView.css'
import Login from 'Pages/Public/LoginPage'

const PaymentView = () => {
  const { userInfo, paymentMethods } = useContext(userContext)
  const { productUuid } = useLoaderData()
  const [searchParams] = useSearchParams()
  const [isAuth, setIsAuth] = useState(false)
  const [product, setProduct] = useState(null)
  const [submitState, setSubmitState] = useState(null)
  const [redirTime, setRedirTime] = useState(4)

  useEffect(() => {
    if (isAuth && submitState === null) {
      const getProduct = async () => {
        const res = await PaymentGateway.getProduct(productUuid)
        setProduct(res.data[0])
      }
      getProduct()
    }

    if (submitState === 'success') {
      setInterval(() => {
        setRedirTime((time) => time - 1)
      }, 1000)
      setTimeout(goBack, 4000)
    }
  }, [isAuth, submitState])

  const goBack = () => {
    // searchParams.get parse query to string
    const redirUrl = searchParams.get('redirecturl')
    window.location.replace(`${redirUrl}`)
  }

  return (
    <div className="vp">
      <div className="pay-bar">
        <img className="logo" src="" alt="PayPulp logo" />
      </div>
      {!isAuth && !submitState && <Login setIsAuth={setIsAuth} />}
      {isAuth && !submitState && (
        <ConfirmPurchase
          product={product}
          userInfo={userInfo}
          paymentMethods={paymentMethods}
          setSubmitState={setSubmitState}
        />
      )}
      <div className="submit-state-message">
        {submitState && <Submitting submitState={submitState} goBack={goBack} location="gateway" />}
        {submitState === 'success' && (
          <div className="submit-redirect-message">
            <div>If you&apos;re not redirected after {redirTime} seconds click here:</div>
            <button className="round-btns blue-outline-btn" onClick={goBack}>
              Leave this place
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentView
