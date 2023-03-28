import axios from 'axios'

export default class PaymentMethods {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static getPayMets = async (tkn) => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = sessionStorage.getItem('token') || tkn
    const config = this.getConfig(token)

    const res = await axios.get(`${baseUrl}/private/user/paymethods`, config)
    return res
  }

  static addPaymentMethod = async (paymentData) => {
    const token = sessionStorage.getItem('token')
    const config = this.getConfig(token)
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/private/user/paymethods`,
      paymentData,
      config,
    )
    return res
  }
}
