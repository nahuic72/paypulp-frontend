import { userContext } from 'Context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import PaymentMethods from 'Services/PaymentMethods'
import UserInfo from 'Services/User'

export default function useGetUserInfo() {
  const { userCtxt, setUserCtxt } = useContext(userContext)
  const [payMets, setPayMets] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await UserInfo.getUserInfo()
        setUserCtxt(data)
      } catch (err) {
        console.log(err)
        toast.error('Ha habido un error accediendo a tu informacion de usuario')
      }
    }
    getData()

    const getUserPayMets = async () => {
      try {
        const { data } = await PaymentMethods.getPayMets()
        setPayMets(data)
      } catch (err) {
        console.log(err)
        toast.error('Ha habido un error accediendo a tus metodos de pago')
      }
    }
    getUserPayMets()
  }, [])

  return { userCtxt, payMets }
}
