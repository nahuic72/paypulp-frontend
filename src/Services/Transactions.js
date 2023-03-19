import axios from 'axios'

class Transactions {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static postTransaction = async (body, token) => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const config = this.getConfig(token)

    const res = await axios.post(`${baseUrl}/private/transaction`, body, config)
    return res
  }

  static confirmTransaction = async (body, token) => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const config = this.getConfig(token)

    const res = await axios.patch(`${baseUrl}/private/transaction/complete`, body, config)
    return res
  }
}

export default Transactions
