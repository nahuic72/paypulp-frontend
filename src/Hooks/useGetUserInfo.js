import { useEffect, useState } from 'react'
import UserInfo from 'Services/User'

export default function useGetUserInfo() {
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await UserInfo.getUserInfo()
        setUser(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

    // get pyment methods
  }, [])

  return { user }
}
