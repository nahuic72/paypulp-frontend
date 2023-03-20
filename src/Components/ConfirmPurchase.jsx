/* import { Container, Paper } from '@mui/material' */
import Gateway from '../Services/PaymentGateway'
import CardImage from './Elements/CardImage'

const ConfirmPurchase = ({ product, userInfo, paymentMethods, setSubmitState }) => {
  const preferredPayMethod = paymentMethods.find((payMethod) => payMethod.isPreferred === true)

  const confirmPayment = async () => {
    setSubmitState('waiting')
    try {
      const transactionTime = new Date().toLocaleString('en-US')
      const transactionInfo = {
        businessId: product.business_id,
        personalId: userInfo.personalId,
        productUuid: product.product_uuid,
        userUuid: userInfo.userUuid,
        payMethodUuid: preferredPayMethod.payMethodUuid,
        totalAmount: product.price,
        dateTime: transactionTime,
        wentThrough: true,
      }
      const res = await Gateway.confirmPayment(transactionInfo)
      if (res.status === 201) setSubmitState('success')
    } catch (error) {
      setSubmitState('error')
      console.error(error)
    }
  }

  return (
    <></>
    /*  <Container className="container">
      <Paper className="pay-info-container" elevation={3}>
        <h2>You&apos;re purschasing: {product?.product_name}</h2>
        <div>with payment method:</div>
        <CardImage />
        <div>{userInfo?.paymentMethod}</div>
        <div>Amount: {product?.price}</div>
        <button className="round-btns blue-btn pay-btn" onClick={confirmPayment}>
          Confirm payment
        </button>
      </Paper>
    </Container> */
  )
}

export default ConfirmPurchase
