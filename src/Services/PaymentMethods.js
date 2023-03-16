import axios from 'axios'

export default class PaymentMethods {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static getPayMetsGateway = async (token) => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const config = this.getConfig(token)

    const res = await axios.get(`${baseUrl}/private/user/paymethods`, config)
    return res
  }
}
