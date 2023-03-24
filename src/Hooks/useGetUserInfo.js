import { userContext } from 'Context/UserContext'
import { useContext, useEffect, useState } from 'react'
import UserInfo from 'Services/User'

export default function useGetUserInfo() {
  const { userCtxt, setUserCtxt } = useContext(userContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await UserInfo.getUserInfo()
        setUserCtxt(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

    // get pyment methods
  }, [])

  return { userCtxt }
}
