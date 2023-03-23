import axios from 'axios'

class UserInfo {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static getUserInfo = async () => {
    const token = localStorage.getItem('token')
    const config = this.getConfig(token)
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/private/user`, config)
    return res
  }

  static postSellerInfo = async (body) => {
    const token = localStorage.getItem('token')
    const config = this.getConfig(token)
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/private/user/sellerinfo`,
      body,
      config,
    )
    return res
  }
}

export default UserInfo
