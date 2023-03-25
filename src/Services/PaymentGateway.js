import axios from 'axios'

class Gateway {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static confirmPayment = async (transactionInfo) => {
    const token = sessionStorage.getItem('token')
    const config = this.getConfig(token)

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/private/transaction`,
        transactionInfo,
        config,
      )
      if (res.status === 201) {
        return res
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default Gateway
