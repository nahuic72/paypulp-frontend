import axios from 'axios'

export default class QrLinksReqs {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static getQrLinkInfo = async (slug, token) => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const config = this.getConfig(token)
    // try {
      const res = await axios.get(`${baseUrl}/private/user/qrlink/${slug}`, config)
      return res
    // } catch (error) {
    //   throw new Error(error)
    // }
  }
}
