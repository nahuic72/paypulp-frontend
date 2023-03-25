import { userContext } from 'Context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import UserInfo from 'Services/User'

export default function useGetUserInfo() {
  const { userCtxt, setUserCtxt } = useContext(userContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await UserInfo.getUserInfo()
        setUserCtxt(data)
      } catch (err) {
        toast.error(
          'Ha habido un problema accediendo a tu informacion. Intentalo de nuevo mas tarde',
        )
      }
    }
    getData()

    // get pyment methods
  }, [])

  return { userCtxt }
}
